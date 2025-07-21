import React from 'react'

const Body = () => {
  const handlechangename=()=>{
    const names=['John', 'Jane', 'Doe'];
    const name= Math.floor(Math.random() * names.length);
    return names[name];
  }

  function clickedIt() {
    console.log("Clicked it");
  }
  const clickedIt2=(name)=>{
    const newName=handlechangename();
    console.log(`Clicked it again with name: ${newName}`);
  }
  return (
    <div>
      
      <p>This is the body of the component.</p> 
      <p>Here you can add more content or components as needed.</p>
      <p>Feel free to customize this body section.</p>
      <p>Remember to handle events and state as required.</p>
      <p>Enjoy building your React application!</p>
      p
      <button onClick={clickedIt}>Click Me</button>
      <button onClick={()=>clickedIt2('john chege')}>Click Me</button>
    
    </div>
  )
}

export default Body