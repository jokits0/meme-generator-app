import React from "react";

export function Exercise() {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  };

  function handleSubmit(event) {
    event.preventDefault(); //no reloading
    console.log(event);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>First Name: {form.firstName}</h1>
      <h1>Last Name: {form.lastName}</h1>
      <h1>Email: {form.email}</h1>
      <h1>comment: {form.comment}</h1>
      <input
        type="text"
        placeholder="First name"
        onChange={handleChange}
        name="firstName"
        value={form.firstName}
      />
      <input
        type="text"
        placeholder="Last name"
        onChange={handleChange}
        name="lastName"
        value={form.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={form.email}
      />
      <textarea
        name="comment"
        onChange={handleChange}
        value={form.comment}
        placeholder="comment"
      />
      <div>
        <input
          type="checkbox"
          id="isFriendly"
          checked={form.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>
      <fieldset>
        <legend>current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={form.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={form.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={form.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>

      <label htmlFor="favColor">What is your favorite color?</label>
      <select
        id="favColor"
        value={form.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose a color --</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
