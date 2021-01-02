const btn = document.querySelector('.btn');
let active = true;
let div;
btn.addEventListener('click', () => {
  if (active) {
    document.querySelector('.desktop-nav').display = 'block';
    div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('menus');
    div.innerHTML = `<ul><li>
  <a href="../">Home</a>
</li>
<li>
  <a href="../games">Games</a>
</li>
<li>
  <a href="../news" id="page">News</a>
</li>
<li>
  <a href="../aboutus">Contact</a>
</li>
<li>
  <a href="../contact">About us</a>
</li></ul>`;
    active = false;
  } else if (active === false) {
    div.classList.remove('menus');
    div.innerHTML = '';
    active = true;
  }
});
