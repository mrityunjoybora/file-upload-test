const multer = require("multer");

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => { 
        callback(null, "public/");
    },

    filename: (req, file, callback) => { 
        const ext = file.mimetype.split("/")[1];
        callback(null, `image-${Date.now()}.${ext}`);
    }
})

const isImage = (req, file, callback) => { 
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {    ;
        callback(new Error("Only Image is Allowed."));
    }
}

const upload = multer({
    storage: multerConfig,
    fileFilter: isImage,
    // dest: "public"
});


exports.uploadImage = upload.single("photo");

exports.upload = (req, res) => { 
    console.log(req.file);

    res.status(200).json({
        success: "Success"
    })
}


/*To correct the path url
article.comments = 0;
let fileUrl = req.file.path.replace(/\\/g, "/").substring("public".length);
 article.img = fileUrl;*/