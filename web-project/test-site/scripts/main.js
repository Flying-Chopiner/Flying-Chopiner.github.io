let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/0.jpg") {
        myImage.setAttribute("src", "images/1.jpg");
    } else {
        myImage.setAttribute("src", "images/0.jpg");
    }
};
