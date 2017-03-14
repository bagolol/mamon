var request = require('request');
var challengeUrl = 'http://aerial-valor-93012.appspot.com/challenge';


request(challengeUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var content = response.body.toString();
    content = JSON.parse(content);
    var values = content.values;
    var token = content.token;
    calculateSum(values, token);
  };
});

var calculateSum = function(values, token) {
  var sum = 0;
  values.reduce(function(previousValue, currentValue){
    sum = previousValue + currentValue;
    return sum;
  });
  answer(sum, token);
};