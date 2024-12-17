export const homepage = homepageCreator;

function homepageCreator() {
    // selecting content div
    const mainContent = document.querySelector("#content");
    // creating img banner
    const imgBanner = document.createElement("img");
    imgBanner.classList.add("heroImg");
    imgBanner.src = "https://playswellwithbutter.com/wp-content/uploads/2019/03/Lemony-Basil-Creamy-Vegan-Pasta-4.jpg";
    // appending imgbanner
    mainContent.appendChild(imgBanner);
    
    //wrapper
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("headlineWrapper");
    mainContent.appendChild(divWrapper);

    // appending headlines
    const divHeadline = document.createElement("div");
    divHeadline.textContent = "The Best Vegan Restaurant in Town!";
    divHeadline.classList.add("headline");
    divWrapper.appendChild(divHeadline);

    // appending descr
    const divDescr = document.createElement("div");
    divDescr.textContent = "Come visit us, open 24/7 at the best location in town!";
    divDescr.classList.add("description");
    divWrapper.appendChild(divDescr);

    console.log('homepage function running');
};
