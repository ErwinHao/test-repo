document.getElementById('btn').addEventListener('click', function () {
  alert("You just got prank'd!");
});

document
  .getElementById('banner__button')
  .addEventListener('click', function () {
    let alert = document.getElementById('alert');
    alert.classList.add('display');
    setTimeout(() => {
      alert.classList.remove('display');
    }, 2000);
  });

window.onscroll = function () {
  scrollFunction();
};

let navbar = document.getElementById('navbar');

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className = 'scrolled';
  } else {
    navbar.className = '';
  }
};
