// Function to display details dynamically
function showDetails(type) {
    const details = {
        web: "I have built multiple responsive and dynamic web projects using HTML, CSS, and JavaScript.",
        graphic: "I love creating visual art using Adobe Photoshop and Illustrator to convey creative ideas.",
        video: "Using Adobe Premiere Pro, I edit and produce engaging videos with creative storytelling."
    };

    // Get the details section and update the text content
    const detailsSection = document.getElementById("details");
    const detailsText = document.getElementById("details-text");

    // Update the content based on the type
    detailsText.innerText = details[type];

    // Display the section
    detailsSection.style.display = "block";
}

// Function to close the details section
function hideDetails() {
    document.getElementById("details").style.display = "none";
}
