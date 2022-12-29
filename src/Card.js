import React from 'react'
import Image from "./Images/kuthira.jpg" 
function Card() {
  const arr =[
    {train_no:12354, source:"awy",dest:"tvm"},
    {train_no:16534, source:"alpy",dest:"kgsd"},
    {train_no:15431, source:"tsr",dest:"pkld"}
  ];
  return (

    <div>
      {arr.map((item)=>{
  return(
  <div className="card" style={{width: "18rem"}}>
  <img src={Image} className="card-img-top" alt="..."/>
  <div className="card-body">
  {/* <h1>{item.train_no}</h1> */}
    <h5 className="card-title">{item.train_no}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  );
      })}
    </div>

  )
}
export default Card;


  // <div className="float-left m-5">
  // <h1></h1>
  // <h2>{item.source}</h2>
  // <h2>{item.dest}</h2>