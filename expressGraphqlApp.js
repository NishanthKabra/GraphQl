var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);


var root = { hello: () => 'Hello world!' };

//Express App
var app = express();
app.use('/graphql', graphqlHTTP({schema: schema, rootValue: root, graphiql: true}));

app.listen(9005, function(){
    console.log("Browse locahost:9005/graphql");
});
