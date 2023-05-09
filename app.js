const express = require('express');
const app = express();


let data = [
	5,8,5,6,7,4,2,5,8,6,2,7,5
];

app.get('/get-data', (req, res) => {
	const randomIndex = Math.floor(Math.random() * data.length); 
	const randomData = data[randomIndex]; 
	res.json(randomData);
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
