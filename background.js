
const fashionClipApiUrl = "https://api-inference.huggingface.co/models/patrickjohncyh/fashion-clip";
const fashionClipHeaders = {
  "Authorization": "Your API Key",
  "Content-Type": "application/json"
};

const couponApiUrl = "https://get-promo-codes.p.rapidapi.com/promo-codes";
const couponApiHeaders = {
  "x-rapidapi-host": "get-promo-codes.p.rapidapi.com",
  "x-rapidapi-key": "Your API Key"
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "processImage") {
    fetchFashionClip(message.imagePath, message.texts)
      .then(response => sendResponse({ result: response }))
      .catch(error => sendResponse({ error: error.message }));
  } else if (message.action === "fetchCoupons") {
    fetchCoupons()
      .then(response => sendResponse({ result: response }))
      .catch(error => sendResponse({ error: error.message }));
  }
  return true;
});

async function fetchFashionClip(imagePath, texts) {
  const imageData = await convertImageToBase64(imagePath);
  const payload = { inputs: { image: imageData, text: texts } };

  const response = await fetch(fashionClipApiUrl, {
    method: "POST",
    headers: fashionClipHeaders,
    body: JSON.stringify(payload)
  });

  return response.json();
}

async function fetchCoupons() {
  const response = await fetch(couponApiUrl, {
    method: "GET",
    headers: couponApiHeaders
  });
  return response.json();
}

function convertImageToBase64(imagePath) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(new Blob([imagePath]));
  });
}
