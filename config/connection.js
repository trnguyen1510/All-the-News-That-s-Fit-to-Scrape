var mongoose = require("mongoose");

// Local Database Configuration with Mongoose
// mongoose.connect("mongodb://localhost/goodnews", function(error)
// 	{if(error) throw error;
// 	console.log("Database connected");
// });

// mLab database
mongoose.connect("mongodb://heroku_4z2j98hl:rnjbp9fghsq0kpchfnem7cep9d@ds147436.mlab.com:47436/heroku_4z2j98hl", { useNewUrlParser: true }, function(err) {
	if(err) throw err;
	console.log('database connected');
});