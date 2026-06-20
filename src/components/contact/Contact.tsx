"use client";

import { Container } from "@/components/layouts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ContactFormData, contactFormSchema } from "@/lib/schemas/formSchema";
import { logger } from "@/lib/logger";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      logger.info("Submitting contact form", { name: data.name });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "सर्वर त्रुटि हुई");
      }

      toast.success("संदेश सफलतापूर्वक भेजा गया!");
      reset();
    } catch (error: unknown) {
      logger.error("Form submission error", undefined, error as Error);
      const message =
        error instanceof Error
          ? error.message
          : "संदेश भेजने में समस्या हुई, कृपया पुनः प्रयास करें!";
      toast.error(message);
    }
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
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto md:w-2/3 lg:w-1/2 flex flex-col gap-6"
        noValidate
      >
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex-1">
            <label htmlFor="name" className="text-sm leading-7 text-secondary">
              आपका नाम
            </label>
            <input
              {...register("name")}
              id="name"
              className={`w-full rounded border ${
                errors.name ? "border-red-500" : "border-secondary"
              } bg-opacity-50 px-4 py-2 text-base leading-8 text-secondary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="text-sm leading-7 text-secondary">
              आपका ईमेल
            </label>
            <input
              {...register("email")}
              id="email"
              className={`w-full rounded border ${
                errors.email ? "border-red-500" : "border-secondary"
              } bg-opacity-50 px-4 py-2 text-base leading-8 text-secondary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-sm leading-7 text-secondary">
            आपका संदेश
          </label>
          <textarea
            {...register("message")}
            id="message"
            className={`h-40 w-full resize-none rounded border ${
              errors.message ? "border-red-500" : "border-secondary"
            } bg-opacity-50 px-4 py-2 text-base leading-6 text-secondary outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-primary focus:ring-2 focus:ring-indigo-200`}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className={`group relative inline-block px-4 py-3 w-full font-medium ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            <span
              className={`absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-secondary transition ease-out duration-400 ${
                isSubmitting
                  ? ""
                  : "group-hover:-translate-x-0 group-hover:-translate-y-0"
              }`}
            ></span>
            <span
              className={`absolute inset-0 h-full w-full border border-secondary bg-primary ${
                isSubmitting ? "" : "group-hover:bg-secondary-50"
              }`}
            ></span>
            <span className="relative text-secondary text-lg font-gotu flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  भेजा जा रहा है...
                </>
              ) : (
                "सबमिट करें"
              )}
            </span>
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
