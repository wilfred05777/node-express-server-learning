import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// import saySomething from './my-other-files.js'

const app = express();
app.use(cors());

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}!`);
});

// app.listen(1234,()=>{
//     console.log('Example app listening on port 3000!');
// });

// app.listen(proccess.env.PORT,()=>{
//     console.log('Example app listening on port 3000!');
// });

app.get('/', (req,res) =>{
    res.send("hello World!");
});
// console.log("Hello Node.js project");

app.get('/test', (req,res)=>{
    res.send('This is /test');
});
// console.log("process.env.MY_SECRET");
