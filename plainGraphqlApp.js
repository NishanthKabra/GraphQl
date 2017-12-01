var { graphql, buildSchema } = require('graphql'); //returns first param a graphql module, second param a graphql function
var schema = buildSchema('type Query {hello: String}');

var root = {hello: () => 'Hello World'};

graphql(schema, '{ hello }', root).then((response) =>{
    console.log(response);
});
