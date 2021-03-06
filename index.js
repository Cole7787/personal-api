var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('../controllers/middleware.js');
var mainCtrl = require('../controllers/mainCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);

app.put('/name/:id', mainCtrl.changeName);
// app.put('/location', mainCtrl.changeLocation);
// app.put('/hobbies', mainCtrl.changeOccupations);
// app.put('/family', mainCtrl.changeFamily);
// app.put('/restaurants', mainCtrl.changeResturants);





app.listen(3000, function(){
  console.log('app is listening');
});
