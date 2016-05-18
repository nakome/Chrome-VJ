var app = require('connect');
var serveStatic = require('serve-static');
app().use(serveStatic(__dirname)).listen(9625, function(){
    console.log('Server running on 9625...');
});
