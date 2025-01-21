  document.getElementById('slide-button').addEventListener('click', function () {
    const details = document.getElementById('slide-panel');
    details.classList.toggle('show');
  });

  document.getElementById('close-button').addEventListener('click', function () {
    const details = document.getElementById('slide-panel');
    details.classList.remove('show');
  });

  document.getElementById('slide-button1').addEventListener('click', function () {
    const details = document.getElementById('slide-panel1');
    details.classList.toggle('show1');
  });

  document.getElementById('close-button1').addEventListener('click', function () {
    const details = document.getElementById('slide-panel1');
    details.classList.remove('show1');
  });

  document.getElementById('slide-button2').addEventListener('click', function () {
    const details = document.getElementById('slide-panel2');
    details.classList.toggle('show2');
  });

  document.getElementById('close-button2').addEventListener('click', function () {
    const details = document.getElementById('slide-panel2');
    details.classList.remove('show2');
  });

  document.getElementById('slide-button3').addEventListener('click', function () {
    const details = document.getElementById('slide-panel3');
    details.classList.toggle('show3');
  });

  document.getElementById('close-button3').addEventListener('click', function () {
    const details = document.getElementById('slide-panel3');
    details.classList.remove('show3');
  });