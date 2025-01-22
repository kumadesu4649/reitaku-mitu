document.getElementById('btn-3101').addEventListener('click', function () {
  const details = document.getElementById('slide-panel');
  details.classList.toggle('show');
});

document.getElementById('close-button').addEventListener('click', function () {
  const details = document.getElementById('slide-panel');
  details.classList.remove('show');
});