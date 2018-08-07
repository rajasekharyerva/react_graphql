var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        courses(topic: String): [Course]
    }

    type Course {

            description: String
            topic: String

        }
`);

var courseData = [
{
            description: 'c',
            topic: 'd'
},{
            description: 'h',
            topic: 'd'
},{            description: 'm',
            topic: 'n'
}
]

var getCourses = function(args){
if(args.topic){
var topic = args.topic;
return courseData.filter(course =>course.topic === topic);
} else {
return courseData; }
}

// Root resolver
var root = {
    courses:getCourses
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));