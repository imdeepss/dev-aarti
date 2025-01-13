"use client";

import { Button, Container } from "@/_components/layouts";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Perform form submission logic here (e.g., sending data to a server)
    // Reset form or show success message after submission.
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  return (
    <Container className="py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="mb-12 flex w-full flex-col text-center">
        <h2 className="text-3xl font-medium text-secondary sm:text-4xl">
          संपर्क करें
        </h2>
        <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto" />
        <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-tertiary">
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
            <label htmlFor="name" className="text-sm leading-7 text-tertiary">
              आपका नाम
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded border border-tertiary bg-opacity-50 px-4 py-2 text-base leading-8 text-tertiary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="text-sm leading-7 text-tertiary">
              आपका ईमेल
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-tertiary bg-opacity-50 px-4 py-2 text-base leading-8 text-tertiary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm leading-7 text-tertiary">
            आपका संदेश
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-40 w-full resize-none rounded border border-tertiary bg-opacity-50 px-4 py-2 text-base leading-6 text-tertiary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
            required
          ></textarea>
        </div>

        <div className="w-full flex justify-center">
          <div
            className={`w-full ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <Button text="सबमिट करें" />
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
