var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        //course(id: Int!): Course
        courses(topic: String): [Course]
        //c:Course
    }

    type Course {
           // id: Int
           // title: String
           // author: String
            description: String
            topic: String
           // url: String
        }

//    type Mutation {
//    updateCourseTopic(id: Int!, topic: String!): Course
//    }
`);

var courseData = [
{
//            id: 1,
//            title: 'A',
//            author: 'B',
            description: 'c',
            topic: 'd'
//            url: 'e'
},{
//            id: 2,
//            title: 'A',
//            author: 'G',
            description: 'h',
            topic: 'd'
//            url: 'j'
},{
//            id: 3,
//            title: 'K',
//            author: 'L',
            description: 'm',
            topic: 'n'
//            url: 'o'
}

]

//var getCourse = function(args){
//var id = args.id;
//return courseData.filter(course => {
//return course.id == id;})[0];
//}

//var getC = function(){
//var id = 1;
//return courseData.filter(course => {
//return course.id == id;})[0];
//}

var getCourses = function(args){
if(args.topic){
var topic = args.topic;
return courseData.filter(course =>course.topic === topic);
} else {
return courseData; }
}

//var updateCourseTopic = function(id, topic) {
//courseData.map(course => {
//console.log('id' + id);
//if(course.id === id){
//course.topic = topic;
//return course;
//}
//});
//console.log('Update couse topic called');
//return courseData.filter(course => course.id === id)[0];
//
//}



// Root resolver
var root = {
    //message: () => 'Hello Rajasekhar'
    //course:getCourse,
    courses:getCourses
    //c:getC,
    //updateCourseTopic: updateCourseTopic
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));