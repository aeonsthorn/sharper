const sharp = require("sharp");

const QUALITY = 90;

const filePath = "NOVO-MiX.jpeg";

const dimensions = {
  height: 750,
  // width: 400,
};

const fileNameParts = filePath.split(".");
const fileName = fileNameParts[0];
const fileExtension = fileNameParts[1];

const newFileName = fileName + "_c." + fileExtension;

sharp(filePath)
  .resize(dimensions)
  .png({ quality: QUALITY })
  .toFile(newFileName, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });

const newWebpFileName = filePath.split(".")[0] + "_c.webp";

sharp(filePath)
  .resize(dimensions)
  .webp({ quality: QUALITY })
  .toFile(newWebpFileName, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
