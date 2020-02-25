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
    const info = document.createElement("div");
    const avatar = document.createElement("div");
    const sections = document.createElement("div");
    const d_content = document.createElement("div");
    const dropdown = document.createElement("div");
    const img = document.createElement("img");
    const i = document.createElement("i");
    const creator = document.createElement("div");
    const s_name = document.createElement("span");
    const s_data = document.createElement("span");
    const s_content = document.createElement("span");
    const dropdown_Content = document.createElement("span");
    const editComment = document.createElement("a");
    const deleteComment = document.createElement("a");

    const addComment_list = document.getElementsByClassName("video__addComment-list");
    const u_avatar = addComment_list[0].querySelector("img");

    info.className = "video__comments-info";
    avatar.className = "creator-avatar";
    img.className = "u-avatar";
    sections.className = "creator-sections";
    creator.className = "creator";
    s_name.className = "name";
    s_data.className = "data";
    d_content.className = "comments-content";
    dropdown.className = "settings-icon dropdown";
    i.className = "fas fa-ellipsis-v dropdown-icon";
    dropdown_Content.className = "dropdown-content";

    img.src = u_avatar.src;
    editComment.innerHTML = "수정";
    deleteComment.innerHTML = "삭제";
    s_name.innerHTML = "kiseop Lee";
    s_name.innerHTML = "2020.02.25";
    s_content.innerHTML = comment;
    li.appendChild(info);

    info.appendChild(avatar);
    avatar.appendChild(img);

    info.appendChild(sections);
    sections.appendChild(creator);
    creator.appendChild(s_name);
    creator.appendChild(s_data);

    sections.appendChild(d_content);
    d_content.appendChild(s_content);

    info.appendChild(dropdown);
    dropdown.appendChild(i);
    dropdown.appendChild(dropdown_Content);
    dropdown_Content.appendChild(editComment);
    dropdown_Content.appendChild(deleteComment);
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

const btnRemove = () => {
    const div = document.getElementById("jsCommentBtn");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
};

function init() {
    commentInput.addEventListener("click", handleInputFocus);
    addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
    init();
}