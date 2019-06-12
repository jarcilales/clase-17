"use strict";

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //homeHandler es una funcion declarada de un forma especial

var homeHandler = function homeHandler(request, response) {
  response.send('Hello world');
};

app.all('/', homeHandler);
app.use('/auth', _auth["default"]);
app.listen(9000);
