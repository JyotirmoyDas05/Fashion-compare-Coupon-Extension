
# Fashion - Compare - Coupon Extension(SimplyShop)

A Chrome extension for fashion product comparison and coupon integration using advanced image similarity algorithms and API-driven coupon aggregation.(Prototype)


![Logo](icons/Logo.png)

## Features

- Identify similar fashion products across platforms.
- Compare prices and discounts.
- Suggest and integrate relevant coupons via your Own coupons API


## Video
[Demo Video](https://github.com/user-attachments/assets/5f6ced74-1509-42ce-ad6f-110b916b1eb4)


## Screenshots

![Extension Screenshot](icons/Screenshot%202025-01-11%20230710.jpg)


## Tech Stack

**HTML**, **CSS**, **JAVASCRIPT**, **MANIFEST V3**


## Installation Setup
1. Clone the repository:
   ```
   git clone https://github.com/JyotirmoyDas05/Fashion-compare-Coupon-Extension.git
   ```
2.  Go to background.js:
   - Go to LINE 8 and change "YOUR API URL" in **couponApiUrl** to the appropriate Coupon API from a Legitimate Coupon aggregator Website such as Rapid API or RetailMeNot API
   - In LINE 9 under **const couponApiHeaders** function change the host URL and API KEY to your OWN API 

3. Save the File all the File under One folder with the Above Changes as Mentioned

4. Load the extension:
   - Open Chrome and go to `chrome://extensions`.
   - Enable Developer Mode.
   - Click "Load unpacked" and select the `Fashion-compare-Coupon-Extension` folder.

    
## License

[MIT](https://choosealicense.com/licenses/mit/)

