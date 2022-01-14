"use strict";

const signinBtn = document.querySelector(".signin-btn");
const signinImg = document.querySelector(".signinImg");
const more = document.querySelector(".more");
const navigationMore = document.querySelector(".navigation-more");
const operatorInput = document.querySelector(".operator-input");
const operatorOption = document.querySelector(".operator");
const phone = document.querySelector(".phone");
const amount = document.querySelector(".amount");
const checkbox = document.querySelector(".checkbox-input");
const rechargeBtn = document.querySelector(".recharge-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const phoneErr = document.querySelector(".phone-error");
const operatorErr = document.querySelector(".operator-error");
const amountErr = document.querySelector(".amount-error");

const operators = ["Airtel", "BSNL", "Jio", "JIO", "MTNL", "Vi"];

const init = function () {
  phone.value = "";
  operatorInput.value = "";
  amount.value = "";
};
init();

signinBtn.addEventListener("mouseover", function () {
  signinImg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTciIGZpbGw9IiMwMGJhZjIiLz4KPGNpcmNsZSBjeD0iMTciIGN5PSIxNC43MzMxIiByPSI3LjkzMzMzIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMDc4OTggMjguMDQ4QzYuNTgzOTkgMjMuNDg5NCAxMS40MzEyIDIwLjM5OTkgMTYuOTk5OSAyMC4zOTk5QzIyLjU2ODcgMjAuMzk5OSAyNy40MTU5IDIzLjQ4OTQgMjkuOTIwOSAyOC4wNDhDMjYuODAyOSAzMS42OTEgMjIuMTcxMSAzMy45OTk5IDE2Ljk5OTkgMzMuOTk5OUMxMS44Mjg4IDMzLjk5OTkgNy4xOTY5MyAzMS42OTEgNC4wNzg5OCAyOC4wNDhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
});

signinBtn.addEventListener("mouseout", function () {
  signinImg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMTciIGZpbGw9IiMwMDI5NzAiLz4KPGNpcmNsZSBjeD0iMTciIGN5PSIxNC43MzMxIiByPSI3LjkzMzMzIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMDc4OTggMjguMDQ4QzYuNTgzOTkgMjMuNDg5NCAxMS40MzEyIDIwLjM5OTkgMTYuOTk5OSAyMC4zOTk5QzIyLjU2ODcgMjAuMzk5OSAyNy40MTU5IDIzLjQ4OTQgMjkuOTIwOSAyOC4wNDhDMjYuODAyOSAzMS42OTEgMjIuMTcxMSAzMy45OTk5IDE2Ljk5OTkgMzMuOTk5OUMxMS44Mjg4IDMzLjk5OTkgNy4xOTY5MyAzMS42OTEgNC4wNzg5OCAyOC4wNDhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
});

const hide = function (ele) {
  ele.classList.add("hidden");
};

const show = function (ele) {
  ele.classList.remove("hidden");
};

more.addEventListener("mouseover", function () {
  show(navigationMore);
});
more.addEventListener("mouseout", function () {
  hide(navigationMore);
});

operatorInput.addEventListener("click", function () {
  show(operatorOption);
});

operatorOption.addEventListener("click", function (e) {
  console.log(e);
  let value = e.target.childNodes[1]?.alt;
  if (value === undefined) {
    value = e.target.alt;

    if (value === undefined) value = e.target.childNodes[0].data;
  }
  //   let value = e.target.alt
  //     ? e.target.alt
  //     : e.target.childNodes[0]?.data
  //     ? e.target.childNodes[0].data
  //     : e.target.childNodes[1].alt;
  //   let value =
  //     e.originalTarget.innerText === ""
  //       ? e.explicitOriginalTarget.alt
  //       : e.originalTarget.innerText;
  operatorInput.value = value;
  e.preventDefault();
});

document.addEventListener("click", function (e) {
  if (operatorInput !== e.target) hide(operatorOption);
});

checkbox.addEventListener("click", function (e) {
  console.log(checkbox);
  if (e.target.checked === true) {
    rechargeBtn.innerText = "Recharge Now";
  } else rechargeBtn.innerText = "Proceed to Recharge";
});

rechargeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isNaN(phone.value) || phone.value.length !== 10) show(phoneErr);
  if (operatorInput.value === "" || !operators.includes(operatorInput.value))
    show(operatorErr);
  if (isNaN(Number(amount.value)) || amount.value === "") show(amountErr);
  if (
    !isNaN(phone.value) &&
    phone.value.length === 10 &&
    operatorInput.value !== "" &&
    operators.includes(operatorInput.value) &&
    !isNaN(Number(amount.value)) &&
    amount.value !== ""
  ) {
    show(modal);
    show(overlay);
    init();
  }
});
closeModal.addEventListener("click", () => {
  hide(modal);
  hide(overlay);
});
overlay.addEventListener("click", () => {
  hide(modal);
  hide(overlay);
});

const removeError = () => {
  console.log(!isNaN(phone.value) && phone.value.length === 10);
  if (!isNaN(phone.value) && phone.value.length === 10) hide(phoneErr);
  if (operatorInput.value !== "" && operators.includes(operatorInput.value))
    hide(operatorErr);
  if (!isNaN(Number(amount.value)) && amount.value !== "") hide(amountErr);
};

phone.addEventListener("keyup", removeError);
operatorOption.addEventListener("click", removeError);
amount.addEventListener("keyup", removeError);
