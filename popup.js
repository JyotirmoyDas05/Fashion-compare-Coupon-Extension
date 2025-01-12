
document.getElementById("findProducts").addEventListener("click", () => {
  const imageFile = document.getElementById("uploadImage").files[0];
  if (!imageFile) {
    alert("Please upload an image!");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    chrome.runtime.sendMessage(
      {
        action: "processImage",
        imagePath: reader.result,
        texts: ["dress", "shoes", "bag"]
      },
      (response) => {
        if (response.error) {
          alert(`Error: ${response.error}`);
        } else {
          document.getElementById("results").innerText = JSON.stringify(response.result);
        }
      }
    );
  };
  reader.readAsDataURL(imageFile);
});

document.getElementById("getCoupons").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "fetchCoupons" }, (response) => {
    if (response.error) {
      alert(`Error: ${response.error}`);
    } else {
      document.getElementById("results").innerText = JSON.stringify(response.result);
    }
  });
});
