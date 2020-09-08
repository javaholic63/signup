import React, { Component } from "react";
import communities from "./communities";
import ageGroups from "./ageGroups";

export default function App() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState("");
  const [community, setCommunity] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      firstName: ${firstName}
      lastName: ${lastName}
      Email: ${email}
      phone: ${phone}
      age: ${age}
      Community: ${community}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Enter Your Contact Informatioin</h1>

      <label>
        First Name:
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>

      <label>
        Last Name:
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Phone:
        <input
          name="phone"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>

      <label>
        Age:
        <select
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        >
          <option key=""></option>
          {ageGroups.map((age) => (
            <option key={age}>{age}</option>
          ))}
        </select>
      </label>

      <label>
        Community:
        <select
          name="community"
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
          required
        >
          <option key=""></option>
          {communities.map((community) => (
            <option key={community}>{community}</option>
          ))}
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
}
