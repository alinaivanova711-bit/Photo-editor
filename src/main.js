import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

const uploadInput = document.getElementById("image-upload");
const uploadBtn = document.getElementById("upload-button");
const cropBtn = document.getElementById("crop-button");
const downloadBtn = document.getElementById("download-button");

const displayedImage = document.getElementById("displayed-image");
const croppedImage = document.getElementById("image-cropped");
const croppedContainer = document.querySelector(".cropped-container");

let cropper = null;
let croppedBlob = null;

uploadBtn.onclick = () => {
  uploadInput.click();
};

uploadInput.onchange = () => {
  const file = uploadInput.files[0];
  if (!file) return;

  if (file.size > 300 * 1024) {
    alert("Файл больше 300 КБ");
    return;
  }

  displayedImage.src = URL.createObjectURL(file);

  displayedImage.onload = () => {
    if (cropper) cropper.destroy();

    cropper = new Cropper(displayedImage, {
      viewMode: 1,
    });
  };
};

cropBtn.onclick = () => {
  if (!cropper) return;

  const canvas = cropper.getCroppedCanvas();

  canvas.toBlob(blob => {
    croppedBlob = blob;

    croppedImage.src = URL.createObjectURL(blob);
    croppedContainer.style.display = "flex";
  });
};

downloadBtn.onclick = () => {
  if (!croppedBlob) return;

  const link = document.createElement("a");
  link.href = URL.createObjectURL(croppedBlob);
  link.download = "cropped.png";
  link.click();
};