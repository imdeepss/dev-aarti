import { Button, Container } from '@/_components/layouts';
import React from 'react';

const Contact = () => {
  return (
    <Container className="py-10 min-h-screen flex flex-col justify-center items-center">
      <div className="mb-12 flex w-full flex-col text-center">
        <h2 className="text-2xl font-medium text-secondary sm:text-3xl">
          Contact Us
        </h2>
        <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto" />
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
        </p>
      </div>
      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <div className="-m-2 flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-7 text-tertiary">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-tertiary bg-opacity-50 px-3 py-1 text-base leading-8 text-tertiary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-tertiary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-tertiary bg-opacity-50 px-3 py-1 text-base leading-8 text-tertiary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-tertiary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-tertiary bg-opacity-50 px-3 py-1 text-base leading-6 text-tertiary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2">
            <Button text="Submit" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
