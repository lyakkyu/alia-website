// JavaScript to Show and Hide Project Details
function showDetails(project) {
    const detailsSection = document.getElementById("details");
    const detailsTitle = document.getElementById("details-title");
    const detailsText = document.getElementById("details-text");
    let projectImage = "";

    // Define content for each project
    if (project === "ar") {
        detailsTitle.textContent = "Augmented Reality - Children Storybook";
        detailsText.textContent =
            "Our ongoing group project is an Augmented Reality (AR) children's storybook that combines storytelling with immersive technology. Through interactive visuals and engaging animations, we aim to bring stories to life, creating a magical reading experience that sparks imagination and curiosity in young readers. This project integrates creativity, design, and cutting-edge AR tools to make learning and storytelling more interactive and enjoyable. As we are still in progress, stay tuned with the result!";
        projectImage = "images/ar.jpg";
    } else if (project === "blender") {
        detailsTitle.textContent = "3D Modeling, Rigging, and Animating";
        detailsText.textContent =
            "Using Blender, I created 3D models, rigged characters, and animated scenes to bring creativity to life.";
        projectImage = "video/animation.mp4"; // Video URL
    } else if (project === "graphic") {
        detailsTitle.textContent = "Graphic Design";
        detailsText.textContent =
            "A graphic design project where I explored my love for editing and creativity, utilizing Adobe Photoshop to produce engaging multimedia content. I am deeply intrigued by the process of transforming ideas into visual art.";
        projectImage = "images/graphic.png";
    }

    // Update the modal content
    const detailsImageContainer = document.getElementById("details-image");
    detailsImageContainer.innerHTML = ""; // Clear previous content

    if (project === "blender") {
        const video = document.createElement("video");
        video.setAttribute("controls", "");
        video.style.width = "100%";
        const source = document.createElement("source");
        source.setAttribute("src", projectImage);
        source.setAttribute("type", "video/mp4");
        video.appendChild(source);
        detailsImageContainer.appendChild(video);
    } else {
        const img = document.createElement("img");
        img.src = projectImage;
        img.alt = project;
        img.style.width = "100%";
        img.style.borderRadius = "10px";
        detailsImageContainer.appendChild(img);
    }

    // Display the modal
    detailsSection.style.display = "block";
}

function hideDetails() {
    const detailsSection = document.getElementById("details");
    detailsSection.style.display = "none";
}
