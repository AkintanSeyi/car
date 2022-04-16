import React from "react";

import Index3 from "./index3";
import  './main.css';
import { Route, Routes  } from "react-router-dom";

const Index1 = () => {
           return (

           

<Routes>

    <Route  path = '/' element = {<Index3/>}   />
   
</Routes> 

           

       
           )
}


export default Index1