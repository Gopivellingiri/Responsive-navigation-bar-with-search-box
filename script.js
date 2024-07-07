const nav = document.querySelector('.nav');
const searchIcon = document.querySelector('#searchIcon');
const navOpenBtn = document.querySelector('.navOpenBtn');
const navCloseBtn = document.querySelector('.navCloseBtn');

const toggleSearch = () => {
    nav.classList.toggle('openSearch');
    nav.classList.remove('openNav');
    const isOpenSearch = nav.classList.contains('openSearch');
    searchIcon.classList.replace(isOpenSearch ? 'fa-magnifying-glass' : 'fa-xmark', isOpenSearch ? 'fa-xmark' : 'fa-magnifying-glass');
};

const openNav = () => {
    nav.classList.add('openNav');
    nav.classList.remove('openSearch');
    searchIcon.classList.replace('fa-xmark', 'fa-magnifying-glass');
};

const closeNav = () => {
    nav.classList.remove('openNav');
};

searchIcon.addEventListener('click', toggleSearch);
navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
