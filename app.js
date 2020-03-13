const wrap = document.querySelector(".wrapper");
const title = document.querySelector(".main-title");
const body = document.querySelector(".wrapper");
const img = document.querySelector("img");
const modal = document.querySelector(".modal-window");
const text = document.querySelector(".text");
const btnClose = document.querySelector(".btn-exit");
const loaderWindow = document.querySelector("#loader");

const test = e => {
  // let box = title.getBoundingClientRect();
  // let titleY = box.top + pageYOffset;
  // let titleX = box.left + pageXOffset;
  const widthBody = e.target.offsetWidth;
  const heightBody = e.target.offsetHeight;
  console.log(e);
  console.log(widthBody);
  const col_1 = widthBody / 5;
  const col_2 = col_1 * 2;
  const col_3 = col_1 * 3;
  const col_4 = col_1 * 4;
  const col_5 = widthBody;

  const row_1 = heightBody / 5;
  const row_2 = row_1 * 2;
  const row_3 = row_1 * 3;
  const row_4 = row_1 * 4;
  const row_5 = heightBody;

  if (e.target.tagName != "DIV") {
    title.style.transform = `translate(${0}px, ${0}px)`;
    img.style.transform = `translate(${0}px, ${0}px)`;
    return;
  }
  // ==================================TOP MOVE========================

  if (e.clientY < row_1) {
    if (e.clientX < col_1) {
      title.style.transform = `translate(${-25}px, ${-25}px)`;
      img.style.transform = `translate(${-12}px, ${-12}px)`;
      return;
    }
    if (e.clientX > col_1 && e.clientX < col_2) {
      title.style.transform = `translate(${-15}px, ${-25}px)`;
      img.style.transform = `translate(${-12}px, ${-12}px)`;
      return;
    }
    if (e.clientX > col_2 && e.clientX < col_3) {
      title.style.transform = `translate(${0}px, ${-25}px)`;
      img.style.transform = `translate(${0}px, ${-12}px)`;
      return;
    }
    if (e.clientX > col_3 && e.clientX < col_4) {
      title.style.transform = `translate(${15}px, ${-25}px)`;
      img.style.transform = `translate(${7}px, ${-12}px)`;
      return;
    }
    if (e.clientX > col_4 && e.clientX < col_5) {
      title.style.transform = `translate(${25}px, ${-25}px)`;
      img.style.transform = `translate(${12}px, ${-12}px)`;
      return;
    }
  }

  // ==================================TOP-Center MOVE========================
  if (e.clientY > row_1 && e.clientY < row_2) {
    if (e.clientX > col_1 && e.clientX < col_2) {
      title.style.transform = `translate(${-10}px, ${-15}px)`;
      img.style.transform = `translate(${-2}px, ${3}px)`;
      return;
    }
    if (e.clientX > col_2 && e.clientX < col_3) {
      title.style.transform = `translate(${0}px, ${-15}px)`;
      img.style.transform = `translate(${0}px, ${-3}px)`;
      return;
    }
    if (e.clientX > col_3 && e.clientX < col_4) {
      title.style.transform = `translate(${10}px, ${-15}px)`;
      img.style.transform = `translate(${2}px, ${-3}px)`;
      return;
    }
  }

  // ==================================LEFT MOVE========================
  if (e.clientX < col_1) {
    if (e.clientY < row_1) {
      console.log("duplication of conditions");
      return;
    }
    if (e.clientY > row_1 && e.clientY < row_2) {
      title.style.transform = `translate(${-25}px, ${-15}px)`;
      img.style.transform = `translate(${-12}px, ${-7}px)`;
      return;
    }
    if (e.clientY > row_2 && e.clientY < row_3) {
      title.style.transform = `translate(${-25}px, ${0}px)`;
      img.style.transform = `translate(${-12}px, ${0}px)`;
      return;
    }
    if (e.clientY > row_3 && e.clientY < row_4) {
      title.style.transform = `translate(${-25}px, ${15}px)`;
      img.style.transform = `translate(${-12}px, ${7}px)`;
      return;
    }
    if (e.clientY > row_4 && e.clientY < row_5) {
      title.style.transform = `translate(${-25}px, ${25}px)`;
      img.style.transform = `translate(${-12}px, ${12}px)`;
      return;
    }
  }
  // ==================================LEFT-Center MOVE========================
  if (e.clientX > col_1 && e.clientX < col_2) {
    if (e.clientY > row_2 && e.clientY < row_3) {
      title.style.transform = `translate(${-15}px, ${0}px)`;
      img.style.transform = `translate(${-3}px, ${0}px)`;
      return;
    }
  }
  // ==================================BOTTOM MOVE========================
  if (e.clientY > row_4) {
    if (e.clientX < col_1) {
      console.log("duplication of conditions");
      return;
    }
    if (e.clientX > col_1 && e.clientX < col_2) {
      title.style.transform = `translate(${-15}px, ${25}px)`;
      img.style.transform = `translate(${-7}px, ${12}px)`;
      return;
    }
    if (e.clientX > col_2 && e.clientX < col_3) {
      title.style.transform = `translate(${0}px, ${25}px)`;
      img.style.transform = `translate(${0}px, ${12}px)`;
      return;
    }
    if (e.clientX > col_3 && e.clientX < col_4) {
      title.style.transform = `translate(${15}px, ${25}px)`;
      img.style.transform = `translate(${7}px, ${12}px)`;
      return;
    }
    if (e.clientX > col_4 && e.clientX < col_5) {
      title.style.transform = `translate(${25}px, ${25}px)`;
      img.style.transform = `translate(${12}px, ${12}px)`;
      return;
    }
  }

  // ==================================BOTTOM-Center MOVE========================
  if (e.clientY > row_3 && e.clientY < row_4) {
    if (e.clientX > col_1 && e.clientX < col_2) {
      title.style.transform = `translate(${-10}px, ${15}px)`;
      img.style.transform = `translate(${-2}px, ${3}px)`;
      return;
    }
    if (e.clientX > col_2 && e.clientX < col_3) {
      title.style.transform = `translate(${0}px, ${15}px)`;
      img.style.transform = `translate(${0}px, ${3}px)`;
      return;
    }
    if (e.clientX > col_3 && e.clientX < col_4) {
      title.style.transform = `translate(${10}px, ${15}px)`;
      img.style.transform = `translate(${2}px, ${3}px)`;
      return;
    }
  }

  // ==================================RIGHT MOVE========================
  if (e.clientX > col_4) {
    if (e.clientY < row_1) {
      console.log("duplication of conditions");
      return;
    }
    if (e.clientY > row_1 && e.clientY < row_2) {
      title.style.transform = `translate(${25}px, ${-15}px)`;
      img.style.transform = `translate(${12}px, ${-7}px)`;
      return;
    }
    if (e.clientY > row_2 && e.clientY < row_3) {
      title.style.transform = `translate(${25}px, ${0}px)`;
      img.style.transform = `translate(${12}px, ${0}px)`;
      return;
    }
    if (e.clientY > row_3 && e.clientY < row_4) {
      title.style.transform = `translate(${25}px, ${15}px)`;
      img.style.transform = `translate(${12}px, ${7}px)`;
      return;
    }
    if (e.clientY > row_4 && e.clientY < row_5) {
      console.log("duplication of conditions");
      return;
    }
  }
  // ==================================RIGHT-Center MOVE========================
  if (e.clientX > col_3 && e.clientX < col_4) {
    if (e.clientY > row_2 && e.clientY < row_3) {
      title.style.transform = `translate(${15}px, ${0}px)`;
      img.style.transform = `translate(${3}px, ${0}px)`;
      return;
    }
  }
};
body.addEventListener("mousemove", test);
//=================================MOUSE EXIT WINDOW==================
const exit = e => {
  if (e.relatedTarget === null) {
    title.style.transform = `translate(${0}px, ${0}px)`;
    img.style.transform = `translate(${0}px, ${0}px)`;
    return;
  }
};
body.addEventListener("mouseout", exit);

//======================================MODAL WINDOW ===============================
const modalWindow = e => {
  if (e.target.tagName === "IMG" || e.target.tagName === "H1") {
    modal.style.transform = `translate(${0}%, ${-100}%)`;
    title.style.opacity = 0;
    img.style.zIndex = 5;
    function imgAnimate() {
      img.style.maxWidth = `${900}px`;
    }
    function deletedImg() {
      img.style.opacity = 0;
      img.style.zIndex = 1;
    }
    function visibilityText() {
      // title.style.opacity = 1;
      img.style.opacity = 1;
      text.style.opacity = 1;
      btnClose.style.opacity = 1;
      img.style.maxWidth = `${700}px`;
    }
    setTimeout(imgAnimate, 10);
    setTimeout(deletedImg, 1400);
    setTimeout(visibilityText, 2000);
  }
  if (e.target.tagName === "BUTTON") {
    modal.style.transform = `translate(${0}%, ${100}%)`;
    setTimeout(() => {
      btnClose.style.opacity = 0;
      text.style.opacity = 0;
      title.style.opacity = 1;
    }, 500);
  }
};
window.addEventListener("click", modalWindow);
//===========================================WINDOW LOADER============
const loader = e => {
  setTimeout(() => {
    loaderWindow.style.opacity = 0;
  }, 800);

  setTimeout(() => {
    title.style.transform = `translate(${0}px, ${0}px)`;
    img.style.transform = `translate(${0}px, ${0}px)`;
    img.style.maxWidth = `${700}px`;
    title.style.fontSize = `${120}px`;
  }, 900);
  setTimeout(() => {
    loaderWindow.remove();
  }, 1000);
};

window.addEventListener("load", loader);
