import React, { useState } from "react";

const AppInfo = () => {
  const [people, setPeople] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newPerson = {
      firstName,
      lastName
    };

    setPeople([...people, newPerson]);

    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      {people.map((p, index) => {
        return (
          <div key={index}>
            <span>
              {p.firstName} {p.lastName}
            </span>
          </div>
        );
      })}
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input value={lastName} onChange={e => setLastName(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AppInfo;
