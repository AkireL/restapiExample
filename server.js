const express = require("express");

const app = express();

// setting
app.set("port", process.env.PORT || 3000);

// middleware
app. use(express.json());

// routes
app.use("/about", (req, res) => { 
	res.json({message: "hola"});
});
app.use("/api/user", require("./routes/user.route"));

// listen
app.listen(app.get("port"), () => {
	console.log("Servidor corriendo en el puerto: ", app.get("port"));	
});

