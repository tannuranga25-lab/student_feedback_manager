import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connectDB from './config/db.js';





async function startServer(){
   try {
    await connectDB();
    app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT} PORT `)
    })

    } catch (error) {
    console.log("Server failed to start: ",error)
    
   }
}

startServer();


