import React from 'react';
const App = () => {
  const arr =[
    {train_no:12354, source:"awy",dest:"tvm"},
    {train_no:16534, source:"alpy",dest:"kgsd"},
    {train_no:15431, source:"tsr",dest:"pkld"}
  ];
  return (
    <div className="d-flex">
        {arr.map((item)=>{
        return(
        <div className="float-left m-5">
        <h1>{item.train_no}</h1>
        <h2>{item.source}</h2>
        <h2>{item.dest}</h2>
        </div>
        );
      })}  
    </div>
  );
}
export default App;

