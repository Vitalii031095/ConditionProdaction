const menuBurgerBt = document.querySelector(".menu-btn");
const menuList = document.querySelector(".header__nav");
const wrapper = document.querySelector("body");

const pageTop = document.querySelector(".page-top");
const pageConditionPrice = document.querySelector(".page-second--condition");
const pageAutoPrice = document.querySelector(".page-second--auto");
const logo = document.querySelector(".header__logo");

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    menuList.classList.remove("active");
    wrapper.classList.remove("scroll");
    menuBurgerBt.classList.remove("active");
  });
}

menuList;
menuBurgerBt.addEventListener("click", () => {
  if (pageTop.classList.contains("none")) {
    return;
  }

  menuList.classList.toggle("active");
  menuBurgerBt.classList.toggle("active");
  wrapper.classList.toggle("scroll");
});
const buttonPriceCondition = document.querySelector(
  ".condition-main__btn--condition"
);
const buttonPriceAuto = document.querySelector(".condition-main__btn--auto");
const headerTel = document.querySelector(".header__tel");
const buttonBack = document.querySelector(".btn--back ");

buttonPriceCondition.addEventListener("click", (e) => {
  pageTop.classList.add("none");
  pageConditionPrice.classList.remove("none");
  headerTel.classList.add("none");
  buttonBack.classList.remove("none");
});

buttonPriceAuto.addEventListener("click", (e) => {
  pageTop.classList.add("none");
  pageAutoPrice.classList.remove("none");
  headerTel.classList.add("none");
  buttonBack.classList.remove("none");
});

logo.addEventListener("click", (e) => {
  if (pageTop.classList.contains("none")) {
    headerTel.classList.remove("none");
    buttonBack.classList.add("none");
  }
  pageTop.classList.remove("none");
  pageAutoPrice.classList.add("none");
  pageAutoPrice.classList.add("none");
});
buttonBack.addEventListener("click", (e) => {
  pageTop.classList.remove("none");
  pageAutoPrice.classList.add("none");
  pageAutoPrice.classList.add("none");
  headerTel.classList.remove("none");
  buttonBack.classList.add("none");
});
