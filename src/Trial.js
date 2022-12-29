import React, { useState } from 'react';
import Image from "./Images/train.jpg" ;
function Trial() {
    const arr=[
        { Train:"janshatabdi",source:"awy",dest:"tvm" },
        { Train:"Intercity",source:"EKM",dest:"tvm" },
        { Train:"Kochuveli",source:"Alpy",dest:"tvm" }
    ];
    const [train,setTrain]=useState(arr);
    console.log(train);
    const obj= { Train:"Mumbai-CST",source:"MBY",dest:"tvm" };
    const addObj=()=>{
      const spread=[...train,obj];
      setTrain(spread);
    //   const addedobj=train.concat(obj);
    //   console.log(addedobj);
     
    // setTimeout(() => {
    //   setTrain(addedobj);
    // }, 2000);
    }

  return (
    <div>
    {train.map((item)=>{
return(

  <div className="card" style={{width: "18rem"}}>
  <img src={Image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className>{item.Train}</h5>
    <h5 className>{item.source}</h5>
  <h5 className>{item.dest}</h5>
  </div>
</div>
);
    })}
    
     <div>
        <button onClick={addObj}>Click me</button>
    </div> 
  </div>
  
  )
}

export default Trial;