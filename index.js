const Loading = document.querySelector(".box_containers");
const HIDDEN_CLASS = "hidden";

function disappear() {
    Loading.classList.add(HIDDEN_CLASS);
  }


  setTimeout(disappear, 2500);