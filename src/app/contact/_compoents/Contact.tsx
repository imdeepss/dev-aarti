"use client";

import { Container } from "@/_components/layouts";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Unknown error occurred");
      }

      alert("संदेश सफलतापूर्वक भेजा गया!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("संदेश भेजने में समस्या हुई, कृपया पुनः प्रयास करें!");
    }

    setIsSubmitting(false);
  };

  return (
    <Container className="py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="mb-12 flex w-full flex-col text-center">
        <h2 className="text-2xl font-bold text-secondary sm:text-3xl font-amita">
          संपर्क करें
        </h2>
        <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto" />
        <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-secondary">
          हमसे संपर्क करें! हम आपके सवालों का जवाब देने, अधिक जानकारी प्रदान
          करने, या आपकी किसी भी समस्या में मदद करने के लिए यहां हैं। हमसे संपर्क
          करें और हम जल्द ही आपसे जुड़ेंगे।
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:w-2/3 lg:w-1/2 flex flex-col gap-6"
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="name" className="text-sm leading-7 text-secondary">
              आपका नाम
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded border border-secondary bg-opacity-50 px-4 py-2 text-base leading-8 text-secondary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="text-sm leading-7 text-secondary">
              आपका ईमेल
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-secondary bg-opacity-50 px-4 py-2 text-base leading-8 text-secondary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm leading-7 text-secondary">
            आपका संदेश
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-40 w-full resize-none rounded border border-secondary bg-opacity-50 px-4 py-2 text-base leading-6 text-secondary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
            required
          ></textarea>
        </div>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-indigo-600 text-white py-3 rounded-md font-semibold transition ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-indigo-700"
            }`}
          >
            {isSubmitting ? "भेजा जा रहा है..." : "सबमिट करें"}
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
