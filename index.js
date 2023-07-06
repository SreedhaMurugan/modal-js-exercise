var modal = document.getElementById('openModal');
var button = document.getElementById('buttonClick');
var close = document.getElementsByClassName('close')[0];

button.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function cancelModal() {
  modal.style.display = 'none';
}
