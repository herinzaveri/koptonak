const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const multer = require("multer");
const path = require("path");
const Data = require("./model/data");
const Admin = require("./model/admin");

const app = express();

app.use(express.json());
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

// add the mongo db
const mongoURI = "mongodb+srv://herin-chaitanya:herin-chaitanya@cluster0.6pkzs.mongodb.net/koptonak?retryWrites=true&w=majority";
// connection
let conn;

const connectFunction = async () => {
	conn = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
};

connectFunction();

// routes
app.use("/", require("./routes/index"));

// set storage engine
const storage = multer.diskStorage({
	destination: "./public/uploads/",
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

// init upload
const upload = multer({
	storage: storage,
}).single("image");

// to upload document
app.post("/upload", (req, res) => {
	upload(req, res, err => {
		if (err) {
			console.log(err);
			res.status(400).send({
				message: "oops something went wrong...",
			});
		} else {
			res.status(200).send({
				path: "uploads/" + req.file.filename,
			});
		}
	});
});

// to upload post document
app.post("/data", async (req, res) => {
	let data = new Data(req.body);

	data = await data.save();

	res.send({ status: 200, msg: "File uploaded successfully" });
});

// to get all documents
app.get("/documents", async (req, res) => {
	const docs = await Data.find();
	res.send(docs);
});

// to delete a post
app.delete("/data/:id", async (req, res) => {
	let response = await Data.findByIdAndDelete(req.params.id);
	res.send(response);
});

// to edit a docmunet
app.put("/data", async (req, res) => {
	const { documentName } = req.body;
	let bodyObj = {
		documentName,
	};

	await Data.findOneAndUpdate({ _id: req.body.id }, bodyObj);

	res.status(200).send({
		status: 200,
		message: "Document updated successfully",
	});
});

// to get specific post
app.get("/data/:id", async (req, res) => {
	let post = await Data.findById(req.params.id);
	res.send(post);
});

// login route
app.post("/login", async (req, res) => {
	const { username, password } = req.body;

	let admin = await Admin.find();
	admin = admin[0];

	if (username === admin.username && password === admin.password) {
		res.send({ status: 200, admin });
	} else {
		res.send({ status: 400, msg: "Invalid username or password" });
	}
});

// get admin route
app.get("/admin", async (req, res) => {
	let admin = await Admin.find();
	admin = admin[0];

	res.send(admin);
});

// change admin
app.post("/admin", async (req, res) => {
	const { username, password } = req.body;

	let admin = await Admin.findOneAndUpdate({}, { username, password });

	res.send(admin);
});

const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));
