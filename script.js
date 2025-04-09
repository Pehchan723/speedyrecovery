document.getElementById("searchInput").addEventListener("focus", function() {
    document.getElementById("searchDropdown").style.display = "block";
});

document.addEventListener("click", function(event) {
    if (!event.target.closest(".search-box"))
        document.getElementById("someID").style.display = "none";
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
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".booking-form form");

    if (!form) {
        console.error("Booking form not found!");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = new URLSearchParams();

        for (const pair of formData.entries()) {
            data.append(pair[0], pair[1]);
        }

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbykwzSeJ5ck8QF-IwkzAmf8pGop5xx2zUM3F9_CKyjZ9y7tw9hUY2k-Of4nv-5UCAId/exec", {
                method: "POST",
                body: data
            });

            const result = await response.text();
            console.log("Google Sheet Response:", result);

            if (result.toLowerCase().includes("success")) {
                alert("Form submitted successfully!");
                form.reset(); // Optional: reset form after success
            } else {
                alert("Form submission failed. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form.");
        }
    });
});


