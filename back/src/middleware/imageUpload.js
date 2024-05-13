const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, `${uuid()}.${mime.extension(file.mimetype)}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (["image/png", "images/jpeg"].includes(file.mimetype)) {
      /* mimetype은 확장자명 */ return cb(null, true);
    } else {
      return cb(new Error("invlid file type"), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5, // 크기 5메가로 제한
  },
});

module.exports = upload;
