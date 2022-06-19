import React, { useState } from "react";

function Form() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      return false;
    }

    if (!form.email) {
      return false;
    }

    if (!form.message || form.message.length < 5) {
      return false;
    }

    console.log(form);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" value={form.message} onChange={handleChange} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
