export const homepage = homepageCreator;

function homepageCreator() {
    // selecting content div
    const mainContent = document.querySelector("#content");
    // creating img banner
    const imgBanner = document.createElement("img");
    imgBanner.classList.add("heroImg");
    imgBanner.src = "https://playswellwithbutter.com/wp-content/uploads/2019/03/Lemony-Basil-Creamy-Vegan-Pasta-4.jpg";
    // css
    imgBanner.style.cssText = "width: 40vw;grid-area: 1 / 1 / -1 / 1;max-height: 100vh";
    // appending imgbanner
    mainContent.appendChild(imgBanner);
    
    //wrapper
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("headlineWrapper");
    divWrapper.style.cssText = "background-color: #94a3b8;height: 35vh;width: 60vw;display: flex;flex-direction:column;justify-content: center;position:relative;top: 20vh;box-shadow: 5px 2px 8px 0px grey;border-radius: 8px";
    mainContent.appendChild(divWrapper);

    // appending headlines
    const divHeadline = document.createElement("div");
    divHeadline.textContent = "The Best Vegan Restaurant in Town!";
    divHeadline.classList.add("headline");
    divHeadline.style.cssText = "font-size: 35px;font-weight: bold;font-family: gabriola;word-spacing: 4px;margin-left: 10px";
    divWrapper.appendChild(divHeadline);

    // appending descr
    const divDescr = document.createElement("div");
    divDescr.textContent = "Come visit us, open 24/7 at the best location in town!";
    divDescr.classList.add("description");
    divDescr.style.cssText = "margin-left: 10px";
    divWrapper.appendChild(divDescr);

    // console.log('homepage function running');
};
