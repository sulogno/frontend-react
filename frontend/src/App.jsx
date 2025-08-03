import { useEffect, useState } from "react";

// Card.jsx or same file
const Card = ({title}) => {
    const [hasliked,sethasliked] = useState(false );

    useEffect(()=>{
        console.log(`${title} has been ${hasliked}`)
    })
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={()=> sethasliked(!hasliked)}>
        {hasliked ? "❤️":"🤍"}
        </button>
    </div>
  );
};

const App = () => {
    

  return (
    <div className="class-container">
      <Card title="starwars"/>
      <Card title="Wednesday"/>
      <Card title="venom"/>
      <Card title="spiderman"/>
      <Card title="ameriacan made"/>
    </div>
  );
};

export default App; 
export { Card };     
