const ProductData = {
  title: "FitBit 19 - The Smartest Watch",
  description:
    "The Fitbit 19 Smart Watch seamlessly combines advanced health tracking features with sleek design for a comprehensive and stylish fitness companion.",
  colorOptions: [
    {
      styleName: "Black Strap",
      imageUrl: "https://imgur.com/iOeUBV7.png",
    },
    {
      styleName: "Red Strap",
      imageUrl: "https://imgur.com/PTgQlim.png",
    },
    {
      styleName: "Blue Strap",
      imageUrl: "https://imgur.com/Mplj1YR.png",
    },
    {
      styleName: "Purple Strap",
      imageUrl: "https://imgur.com/xSIK4M8.png",
    },
  ],
  featureList: ["Time", "Heart Rate"],
};

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;
