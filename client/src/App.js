import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';

const App = (data) => {
  //console.log(data);
  let getList = null;
  //console.log('loading ', data.data.loading);
  if (!data.data.loading) {
    getList = data.data.courses.map(function (course) {

      //console.log('course ', course);
      return <li key={course.description}>{course.description}</li>
    });
  }
  return (
    <div>
      {getList}
    </div>
  );
}

export default graphql(
  gql`query getCourses($ciid: String!){
                     courses(topic: $ciid){
                       description
                     }
                   }
  `, {
    options: ({ testOptions }) => ({ variables: { ciid: "d" } })
  }
)(App)