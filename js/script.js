// Details for each feature
const featureDetails = {
    web: {
        title: "Web Development",
        description: "I have developed responsive and interactive web projects using HTML, CSS, and JavaScript, ensuring functionality and modern design."
    },
    graphic: {
        title: "Graphic Design",
        description: "I love creating stunning visuals and designs using Adobe Photoshop and Illustrator, mostly Canva; turning ideas into engaging visual art."
    },
    video: {
        title: "Video Editing",
        description: "I edit and produce engaging video content using Adobe Premiere Pro and CapCut focusing on storytelling and dynamic visuals."
    }
};

// Function to display modal with feature details
function showDetails(featureType) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    // Update content dynamically
    modalTitle.innerText = featureDetails[featureType].title;
    modalDescription.innerText = featureDetails[featureType].description;

    // Show the modal
    modal.style.display = "flex";
}

// Function to hide the modal
function hideDetails() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
