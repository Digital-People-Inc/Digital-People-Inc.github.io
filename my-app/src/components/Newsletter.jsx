import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="flex justify-center">
      <form className="flex flex-col gap-4 w-min" onSubmit={handleFormSubmit}>
        <input
          type="name"
          placeholder="Name"
          className="border p-2 rounded-lg"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Your email"
          className="border p-2 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Subscribe
        </button>
        {subscribed && <p>Thank you for subscribing!</p>}
      </form>

      {/* <form className="flex flex-col items-center" onSubmit={handleFormSubmit}>
        <h2>Subscribe to our newsletter</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="border p-2 m-2"
        />
        <button type="submit" className="border p-2 m-2">
          Subscribe
        </button>
        {subscribed && <p>Thank you for subscribing!</p>}
      </form> */}
    </section>
  );
}
