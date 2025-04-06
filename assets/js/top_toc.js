document.addEventListener("DOMContentLoaded", function() {
    const tocMenu = document.querySelector(".toc__menu");
    if (tocMenu) {
        const newListItem = document.createElement("li");
        newListItem.innerHTML = '<a href="#site-nav">Top</a>';
        tocMenu.insertBefore(newListItem, tocMenu.firstChild);
    }
});