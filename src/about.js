export const aboutPage = aboutPageCreator;

function aboutPageCreator() {
    // selecting content div
    const mainContent = document.querySelector('#content');
    // banner
    const imgBanner = document.createElement("img");
    imgBanner.classList.add("heroImg");
    imgBanner.src = "https://i0.wp.com/jennyinneverland.com/wp-content/uploads/2019/08/chris-liverani-oCsaxvGCehM-unsplash.jpg";
    imgBanner.style.cssText = "width:40vw; grid-area: 1/1/-1/1; max-height:100vh";
    mainContent.appendChild(imgBanner);

    const divWrapper = document.createElement("div");
    divWrapper.classList.add("headlineWrapper");
    divWrapper.style.cssText = "background-color: #94a3b8;height: 35vh;width: 60vw;display: flex;flex-direction:column;justify-content: center;position:relative;top: 20vh;box-shadow: 5px 2px 8px 0px grey;border-radius: 8px";
    mainContent.appendChild(divWrapper);

    const divHeadline = document.createElement("div");
    divHeadline.textContent = "Our Locations";
    divHeadline.classList.add("headline");
    divHeadline.style.cssText = "font-size: 35px;font-weight: bold;font-family: gabriola;word-spacing: 4px;margin-left: 10px";
    divWrapper.appendChild(divHeadline);

    const divDescr = document.createElement("div");
    divDescr.textContent = `333 Road to Nowhere, Town of NotInHere`;
    divDescr.classList.add("description");
    divDescr.style.cssText = "margin-left: 10px";
    divWrapper.appendChild(divDescr);
};