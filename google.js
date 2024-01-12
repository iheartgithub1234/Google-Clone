mainSearch = document.getElementById("mainSearch");

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