const inputView = document.getElementById("input-view");
const resultView = document.getElementById("result-view");
const btn = document.getElementById("submit-btn");

btn.onclick = function () {
  inputView.style.display = "none";
  resultView.style.display = "block";
};

resultView.onclick = function () {
  inputView.style.display = "block";
  resultView.style.display = "none";
};
