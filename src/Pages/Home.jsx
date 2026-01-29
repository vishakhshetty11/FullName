import React, { useState } from 'react';

function Home() {
  const [data, setData] = useState({
    firstName: "",
    lastName: ""
  });

  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const first = data.firstName.trim();
    const last = data.lastName.trim();

    if (first && last) {
      setFullName(`Full Name: ${first} ${last}`);
    } else {
      setFullName("");
    }
  };

  return (
    <div>
      {/* ✅ REQUIRED */}
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* ✅ MUST BE DIRECT TEXT */}
      {fullName && <div>{fullName}</div>}
    </div>
  );
}

export default Home;
