const btn = document.querySelector("#button");
const btn2 = document.querySelector("#button2");

btn.onclick = function () {
  console.log("버튼이 클릭되었습니다.");
};

btn2.addEventListener("click", function () {
  alert("버튼이 클릭되었습니다.");
});
