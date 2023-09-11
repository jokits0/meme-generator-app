import React from "react";

export function Form() {
  const [isSuccess, setIsSuccess] = React.useState("");
  const [formLogin, setFormLogin] = React.useState({
    email: "",
    password1: "",
    password2: "",
    isJoinNewsLetter: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormLogin((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    formLogin.password1 === formLogin.password2
      ? setIsSuccess("Successfully log in")
      : setIsSuccess("Passwords do not match");

    formLogin.password1 === formLogin.password2 &&
      formLogin.isJoinNewsLetter &&
      console.log("Thanks for signing up for our newsletter!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        name="email"
        value={formLogin.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter password"
        name="password1"
        value={formLogin.password1}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Confirm password"
        name="password2"
        value={formLogin.password2}
        onChange={handleChange}
      />

      <div>
        <input
          type="checkbox"
          id="isJoinNewsLetter"
          checked={formLogin.isJoinNewsLetter}
          name="isJoinNewsLetter"
          onChange={handleChange}
        />
        <label htmlFor="isJoinNewsLetter">I want to join the newsletter</label>
      </div>
      <button>Sign up</button>
      <p className="is-success">{isSuccess}</p>
    </form>
  );
}
