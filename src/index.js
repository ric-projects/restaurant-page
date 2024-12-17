import "./styles.css";
import { homepage } from "./homepage.js";
import { clearcontent } from "./clearDiv.js";
import { aboutPage } from "./about.js";
import { menuPage } from "./menu.js";

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
    menuPage();

});

aboutBtn.addEventListener("click", () => {
    clearcontent();
    aboutPage();

});

homepage();