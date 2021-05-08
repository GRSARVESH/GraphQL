const express = require('express');
const graphql=require('graphql');
const schema=require('./Schema/index.js');
const {graphqlHTTP} = require('express-graphql');
const app= express();
const port=8000;

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true,
}));

app.listen(port,()=>
console.log(`listening on port ${port}`))