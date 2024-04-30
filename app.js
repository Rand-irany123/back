import  express  from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import connectDB from "./DB/connection.js";
import * as indexRouter from './src/module/index.route.js'
const app=express();
dotenv.config()
connectDB()
const baseUrl=process.env.BASEURL
const port=process.env.port
app.use(express.json())
app.use(cors())
app.use(`${baseUrl}/auth`,indexRouter.authRouter)
app.use(`${baseUrl}/signal`,indexRouter.signalrouter)
app.use(`${baseUrl}/contact`,indexRouter.contactRouter)
app.use(`${baseUrl}/Appointment`,indexRouter.Appointment)
app.use(`${baseUrl}/trainer`,indexRouter.trainerRouter)
app.use(`${baseUrl}/privatr1`,indexRouter.private1Router)
app.use(`${baseUrl}/public`,indexRouter.publicRouter)
app.use(`${baseUrl}/heavy`,indexRouter.heavyRouter)
app.use(`${baseUrl}/light`,indexRouter.lightRouter)
app.use(`${baseUrl}/micro`,indexRouter.microRouter)
app.use(`${baseUrl}/tractor`,indexRouter.tractorRouter)
app.use(`${baseUrl}/car`,indexRouter.carRouter)
app.use(`${baseUrl}/bus`,indexRouter.busRouter)
app.use(`${baseUrl}/truk`,indexRouter.trukRouter)
app.use(`${baseUrl}/lightTruk`,indexRouter.lightrukRouter)
app.use(`${baseUrl}/micoTruk`,indexRouter.MicroTrukModel)
app.use(`${baseUrl}/trukTaractor`,indexRouter.tractotrtractorModel)
app.use('*',(req,res)=>{
    res.status(400).json({message:'this page  not found'})
})
app.listen(port,()=>{
    console.log(`server run in ${port}`)              
            
})   
       
         