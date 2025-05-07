const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const questionContainer = document.getElementById('questionContainer');
const popupMessage = document.getElementById('popupMessage');
const img = document.getElementById('image');
const body = document.getElementById('body');

btnNo.addEventListener("mouseover", () => {
  const containerRect = questionContainer.getBoundingClientRect();
  const maxX = containerRect.width - btnNo.offsetWidth;
  const maxY = containerRect.height - btnNo.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  btnNo.style.position = "absolute";
  btnNo.style.left = `${newX}px`;
  btnNo.style.top = `${newY}px`;
});

btnYes.addEventListener("click", () => {
  popupMessage.style.display = "block";
  img.style.display = "block";
  btnNo.style.display = "none";
  btnYes.style.display = "none";
  body.style.backgroundImage = "url('bg.jpg')";
  questionContainer.style.marginTop = "70%";
});
