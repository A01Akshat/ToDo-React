import React from 'react'

const Showtodo = (props) => {
  return (
    <>
      <div>
        <h6 style={{ textAlign: "center", marginLeft: "-18rem", marginRight: "20rem", marginTop: "1rem" }}>{props.task}</h6>

        <button style={{ textAlign: "center", marginLeft: "59rem", marginRight: "20rem", marginTop: "-4rem" }} onClick={() => { props.onSelect(props.id) }}>X</button>
      </div> </>
  )
}
export default Showtodo;