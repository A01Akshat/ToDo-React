import React, { useEffect, useState } from 'react'
import Showtodo from './Showtodo';

const getLocal=()=>{
let list=localStorage.getItem('lists');
if(list){
  return JSON.parse(list);
}
else{
  return [];
}
}




const App = () => {


  const [task, settask] = useState("");
  const [data, setdata] = useState(getLocal());

  const eventHandler = (e) => {
    settask(e.target.value)
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    //console.log("SUBMIT")
    const newData = task;
    setdata([...data, newData])

    settask('');
  }

  const deleteitem = (a) => {
    // console.log("DELETED");
    const finaldata=data.filter((currelem,index)=>{
      return index!=a;
    })
    setdata(finaldata); 
  }

  useEffect(()=>{
    localStorage.setItem("lists",JSON.stringify(data))
},[data]) 

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div style={{ backgroundColor: "lightblue", textAlign: "center", marginLeft: "20rem", marginRight: "20rem", marginTop: "16rem" }}>To-Do App</div>
        <input id="todo-input" type="text" style={{ marginLeft: "20rem", marginRight: "20rem", marginTop: "2rem" }} value={task} onChange={eventHandler} />
        <button style={{ textAlign: "center", marginLeft: "20rem", marginRight: "20rem", marginTop: "1rem" }}>ADD</button>
        <hr style={{ width: "50%" }}></hr>
      </form>

      {data.map((value, index) => {
        return <Showtodo
          key={index}
          id={index}
          task={value}
          onSelect={deleteitem}
        />
      })}



    </>
  )
}
export default App;
