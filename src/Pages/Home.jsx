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
    if (data.firstName.trim() !== "" && data.lastName.trim() !== "") {
      setFullName(data.firstName.trim() + " " + data.lastName.trim());
    }
    else {
      setFullName("");
    }

  }
  return (
    <div>
      <h2>Full Name Display</h2>
      <form onSubmit={handleClick}>
        <div style={{ marginBottom: "10px" }}>
          <label>First Name: </label>
          <input type='text' name="firstName" onChange={handlChange} value={data.firstName} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Last Name: </label>
          <input type='text' name="lastName" onChange={handlChange} value={data.lastName} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button>Submit</button>
        </div>
      </form>
      {fullname !== "" &&
        <div>
          <label>Full Name: </label>
          <span>{fullname}</span>
        </div>}
    </div>
  )
}

export default Home