// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("file-upload");
    const previewImage = document.getElementById("preview");

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = (e) => {
                previewImage.src = e.target.result;
                previewImage.style.display = "block"; // Show the preview image
            };

            reader.readAsDataURL(file); // Read the image file
        } else {
            previewImage.src = "";
            previewImage.style.display = "none";
            alert("Please select a valid image file.");
        }
    });
});
