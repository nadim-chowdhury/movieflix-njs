"use client";

import { useState } from "react";

export default function ContactForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="mt-8 bg-white p-4 rounded-lg flex" onSubmit={handleSubmit}>
      <div className="mr-6">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-start pb-2 text-xl">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className="text-lg px-4 py-1 rounded-md bg-red-100"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-start py-2 text-xl">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="text-lg px-4 py-1 rounded-md bg-red-100"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-start py-2 text-xl">
            Phone:
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className="text-lg px-4 py-1 rounded-md bg-red-100"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-start pb-2 text-xl">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          className="text-lg px-4 py-1 rounded-md bg-red-100"
          rows="5"
          placeholder="Enter your message"
          value={user.message}
          onChange={handleChange}
          required
        ></textarea>

        <div>
          {status === "success" && <p>Thank you for your message!</p>}
          {status === "error" && (
            <p>There was an error submitting your message. Please try again.</p>
          )}

          <button
            type="submit"
            className="bg-red-600 w-full rounded-full text-white mt-4 py-1 hover:bg-red-400 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
