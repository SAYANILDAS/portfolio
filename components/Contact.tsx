"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-gray-400">{status}</p>
        )}
      </form>
    </section>
  );
}