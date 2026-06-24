const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const blogs = document.querySelectorAll('.blog-wrapper');

blogs.forEach(item => {
    item.classList.remove('open');
});

blogs[id].classList.add('open');