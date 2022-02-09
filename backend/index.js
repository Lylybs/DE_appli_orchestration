const express = require('express')
const app = express();
const port = 3000;

const session = require('express-session');
    const MongoDBStore = require('connect-mongodb-session')(session);
    const store = new MongoDBStore({
        uri: "mongodb+srv://lylybs:<password>@cluster0.hppn1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        collection: 'sessions'
    });
    app.use(
        session({
            secret: 'secret string',
            resave: false,
            saveUninitialized: false,
            store: store,
            cookie:{}
        })
    );

app.get('/', function(req, res){
    if(!req.session.counter)
        res.session.counter = 0;
    req.session.counter++;
    res.send({
        pageCount: req.session.counter
    });
});


app.get('/', (req, res) => {
  res.send('Hello World!')
});
