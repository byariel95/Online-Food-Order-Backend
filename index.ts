import express from 'express';
import {AdminRoutes, VandorRoutes} from './src/routes'

const app = express();

app.use('/admin',AdminRoutes);
app.use('/vandor',VandorRoutes);


app.listen(3000,()=>{
    console.log('app listen on port 3000!!')
})