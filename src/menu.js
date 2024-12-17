export const menuPage = menuPageCreator;

function menuPageCreator() {
    // select
    const mainContent = document.querySelector("#content");

    const imgBanner = document.createElement("img");
    imgBanner.classList.add("heroImg");
    imgBanner.src = "https://thegreenloot.com/wp-content/uploads/2017/07/easy-vegan-dinner-recipes-healthy-8.jpg";
    // css
    imgBanner.style.cssText = "width: 40vw;grid-area: 1 / 1 / -1 / 1;max-height: 100vh";
    mainContent.appendChild(imgBanner);

    const divWrapper = document.createElement("div");
    divWrapper.classList.add("headlineWrapper");
    divWrapper.style.cssText = "background-color:#94a3b8; height:55vh; width:60vw; display:flex; flex-direction:column; justify-content:center; position:relative; top:5vh; box-shadow:5px 2px 8px 0px grey; border-radius:8px; align-items: center; justify-content:space-around;";
    mainContent.appendChild(divWrapper);

    const divHeadline = document.createElement("div");
    divHeadline.textContent = "Your Menu Options";
    divHeadline.classList.add("headline");
    divHeadline.style.cssText = "font-size:35px; font-weight:bold; font-family:gabriola; word-spacing:4px;"
    divWrapper.appendChild(divHeadline);

    const divWrapItem1 = document.createElement("div");
    divWrapItem1.textContent = "Sandwich $10";
    divWrapItem1.classList.add("item");
    divWrapItem1.style.cssText = "font-size:22px; font-family:gabriola; word-spacing: 4px";
    divWrapper.appendChild(divWrapItem1);

    const divWrapItem2 = document.createElement("div");
    divWrapItem2.textContent = "Poké Bowl $13";
    divWrapItem2.classList.add("item");
    divWrapItem2.style.cssText = "font-size:22px; font-family:gabriola; word-spacing: 4px";
    divWrapper.appendChild(divWrapItem2);

    const divWrapItem3 = document.createElement("div");
    divWrapItem3.textContent = "Medium Pizza $15";
    divWrapItem3.classList.add("item");
    divWrapItem3.style.cssText = "font-size:22px; font-family:gabriola; word-spacing: 4px";
    divWrapper.appendChild(divWrapItem3);

    const divWrapItem4 = document.createElement("div");
    divWrapItem4.textContent = "Paella $18";
    divWrapItem4.classList.add("item");
    divWrapItem4.style.cssText = "font-size:22px; font-family:gabriola; word-spacing: 4px";
    divWrapper.appendChild(divWrapItem4);
};