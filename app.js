const express= require ('express');
const app= express();

const mainRouter= require ('./routes/main')

app.listen (3000, ()=> console.log ('servidor live'));

app.use('/', mainRouter);