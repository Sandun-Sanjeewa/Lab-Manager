import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import labrouter from './routes/labRoute.js';
import equipmentTypeRouter from './routes/equpmentTypeRoute.js';
import equipmentRouter from './routes/equipmentRoute.js';



dotenv.config();

connectDB();

const app=express();

app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


app.use("/api/user",userRouter);
app.use("/api/lab", labrouter);
app.use("/api/equipment" , equipmentTypeRouter);
app.use("/api/equipment", equipmentRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`);
});



