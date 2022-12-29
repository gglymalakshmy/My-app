import React, {useEffect,useState} from 'react'

function Hook1() {
    const [count, setcount]=useState(0);
useEffect(() => {
  alert("Hiii");
}, [count])

      return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>+</button>
        <button onClick={()=>setcount(count-1)}>-</button>
    </div>
  )
}

export default Hook1