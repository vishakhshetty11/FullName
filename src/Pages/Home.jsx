import React, { useState } from 'react'

function Home() {
  const [data, setData] = useState({
    firstName: "",
    lastName: ""
  })
  const [fullname, setFullName] = useState("");
  const handlChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleClick = (e) => {
    e.preventDefault();
    setFullName(data.firstName + " " + data.lastName);
    }
  return (
    <div>
      <form onSubmit={handleClick}>
        <div style={{marginBottom:"10px"}}>
          <label>First Name: </label>
          <input type='text' name="firstName" onChange={handlChange} value={data.firstName} />
        </div>
        <div style={{marginBottom:"10px"}}>
          <label>Last Name: </label>
          <input type='text' name="lastName" onChange={handlChange} value={data.lastName} />
        </div>
        <div style={{marginBottom:"10px"}}>
          <button>Submit</button>
        </div>
        {fullname !== "" &&
          <div>
            <label>Full Name: </label>
            <span>{fullname}</span>
          </div>}
      </form>
    </div>
  )
}

export default Home