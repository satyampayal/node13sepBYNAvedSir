const   express  =require( "express");
const  route =require( "./Routes/userRoutes.js");

const app = express();
const PORT = 7002;

app.use(express.json());
app.use('/api/v1/user',route);
 app.all('*',(req,res)=>res.send("Not Path "))

app.listen(PORT, (err) => {
  if (err) console.log("Not Connetced");
  else console.log(`Connected At Port ${PORT}`);
});
