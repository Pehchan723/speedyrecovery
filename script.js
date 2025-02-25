document.getElementById("searchInput").addEventListener("focus", function() {
    document.getElementById("searchDropdown").style.display = "block";
});

document.addEventListener("click", function(event) {
    if (!event.target.closest(".search-box")) {
        document.getElementById("searchDropdown").style.display = "none";
    }
});

function selectService(service) {
    document.getElementById("searchInput").value = service;
    document.getElementById("searchDropdown").style.display = "none";
}
function scrollLeft() {
    document.querySelector(".image-container").scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    document.querySelector(".image-container").scrollBy({ left: 200, behavior: 'smooth' });
}
function toggleDropdown() {
    document.getElementById("dropdown").style.display = "block";
}

function selectService(service) {
    document.getElementById("searchInput").value = service;
    document.getElementById("dropdown").style.display = "none";
}

document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("dropdown");
    let searchInput = document.getElementById("searchInput");
    
    if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
