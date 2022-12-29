import React from 'react';
function Spread() {
    const arr=[
        { Train:"janshatabdi",source:"awy",dest:"tvm" },
        { Train:"Intercity",source:"EKM",dest:"tvm" },
        { Train:"Kochuveli",source:"Alpy",dest:"tvm" }
    ]
    console.log(arr);
  const obj= { Train:"Mumbai-CST",source:"MBY",dest:"tvm" };
    function myFn()
    {
      arr.push(obj);
    }
    // console.log(arr);
  return (
   
    <div>
    
<div className="d-flex">
        {arr.map((item)=>{
        return(
        <div className="float-left m-5">
        <h1>{item.Train}</h1>
        <h2>{item.source}</h2>
        <h2>{item.dest}</h2>
        </div>
        );
      })}  
    </div>
    <button onClick={myFn()}>Click me</button>
   </div>
     
  );
}
export default Spread;
