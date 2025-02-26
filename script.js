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
        return; // Stops the function if no form exists
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevents page reload

        const formData = new FormData(form);

        try {
            const response = await fetch("your-backend-endpoint", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                document.querySelector("form").addEventListener("submit", function(event) {
                    alert("Form submitted successfully!"); // Temporary success message
                });
                            }

                            return response.text(); // Get response as plain text instead of JSON
                            console.log("Server Response:", result);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form.");
        }
    });
});

