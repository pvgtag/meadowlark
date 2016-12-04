var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Meadoelark Trevel');
});

app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('About Meadoelark Trevel');
});


app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Не найдено');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server error');
    
});

app.listen(3000, function() {
    console.log('App listening on port ' + app.get('port') + '!');
});