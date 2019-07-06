const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const cloudinary = require("../config/cloudinary");
const {ensureLoggedIn} = require('connect-ensure-login')
/* GET home page. */
router.get("/", async (req, res, next) => {
const pics =   await Post.find()
  res.render("index",{pics});
});

router.get("/detail/:id", async (req,res,next) => {
const {id} =req.params
  const img = await Post.findById(id)
res.render("detail", img)
})

router.post("/picture/add", ensureLoggedIn("/login"), cloudinary.single("photo"), async (req, res) => {
  const { content} = req.body;
  const { url: picPath, originalname: picName } = req.file;
  await Post.create({
    content,
    creatorId: req.user.id,
    picPath,
    picName
  });

  res.redirect("/");
});

router.post('/comment/:id',ensureLoggedIn("/login"), cloudinary.single("photo"), async (req, res) => {
const {id} = req.params
const {content} = req.body
const {fileName, originalname}= req.file
if(req.file){
  await Post.findByIdAndUpdate(id,{
    $push: {
        comments: {
          content,
          commentId: req.user._id,
           imgPath: fileName,
          imgName: originalname
        }
    }
    
  })

}else {
			await Post.findByIdAndUpdate(id,
				{
					$push: {
						comments: {
							 content,
							"commentId": req.user._id,
						}
					}
				})
		}
		
	res.redirect(`/`)
})


module.exports = router;


//editar imagen de perfil 
// hacer el anchor de profile

