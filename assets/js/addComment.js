import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const commentInput = addCommentForm.querySelector("input");

const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = comment => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    commentList.prepend(li);
    increaseNumber();
};

const sendComment = async comment => {
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment
        }
    });
    if (response.status === 200) {
        addComment(comment);
        btnRemove();
    }
};

const handleSubmit = event => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
};

const handleInputFocus = event => {
    const div = document.getElementById("jsCommentBtn");
    if (div.hasChildNodes()) {
        return;
    }
    commentInput.placeholder = "";
    const confirmBtn = document.createElement("button");
    const confirmBtnText = document.createTextNode("확인");
    confirmBtn.appendChild(confirmBtnText);
    confirmBtn.id = "jsConfirmBtn";

    const cancelBtn = document.createElement("button");
    const cancelBtnText = document.createTextNode("취소");
    cancelBtn.appendChild(cancelBtnText);
    cancelBtn.id = "jsCancelBtn";

    div.appendChild(confirmBtn);
    div.appendChild(cancelBtn);

    const removeCancelBtn = document.getElementById("jsCancelBtn");
    removeCancelBtn.addEventListener("click", btnRemove);
};

const test = () => {
    confirm("테스트");
}

const btnRemove = () => {
    const div = document.getElementById("jsCommentBtn");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
};

function init() {
    commentInput.addEventListener("click", test);
    addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
    init();
}