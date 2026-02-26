fetch('navbar.html')
    .then(res => res.text())
    .then(html => document.getElementById('navbar-placeholder').innerHTML = html);

fetch('footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer-placeholder').innerHTML = html);

function toggleMenu() {
    document.getElementById('navbarMenu').classList.toggle('navbar-menu-active');
}
