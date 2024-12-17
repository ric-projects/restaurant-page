import "./styles.css";
import { homepage } from "./homepage.js";
import { clearcontent } from "./clearDiv.js";

// console.log('testing webpack connection ');

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener("click", () => {
    // alert('changing to home');
    clearcontent();
    // console.log(homepage);
    homepage();
});

menuBtn.addEventListener("click", () => {
    clearcontent();

});

aboutBtn.addEventListener("click", () => {
    clearcontent();

});

homepage();
// console.log(homepage);
// console.log(homepage());