import React from 'react'
import { BiBell } from "react-icons/bi";

function Icon() {
  return (
    <div>
    <h1 style={{
  color:"violet",
  textAlign:"center"
    }}>This is Bootstrap Icon</h1>
    <div style={{
      textAlign:"center",
      margin: "0 20px",
    }}>
<BiBell
style={{
  color:"blue",
  fontSize:"40px",
//   backgroundColor:"blue",
}}
/>
    </div>
  </div>
  )
}

export default Icon;
