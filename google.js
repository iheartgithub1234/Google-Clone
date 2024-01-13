let mainSearch = document.getElementById("mainSearch");
let feelingArray = ["Im feeling lucky", "Im feeling adventerous", "Im feeling stellar", "Im feeling artistic", "Im feeling curious", "Im feeling trendy", "Im feeling doodly"];

mainSearch.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        search();
    }
});

function search() {
    if(mainSearch.value != "") {
        location.replace("https://www.google.com/search?q=" + encodeURIComponent(mainSearch.value));
    }
}

function imFeelinLucky() {
    location.replace("https://www.google.com/search?q=" + feelingArray[Math.floor(Math.random() * feelingArray.length)]);
}
