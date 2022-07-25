const innerPart = document.getElementById("in");
const outerPart = document.getElementById("out");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

const open_card = () => {
  outerPart.className = "open-card";
};

const close_card = () => {
  outerPart.className = "";
};

openButton.addEventListener("click", open_card);
closeButton.addEventListener("click", close_card);
