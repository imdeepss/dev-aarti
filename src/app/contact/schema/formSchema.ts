import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "नाम कम से कम 2 अक्षरों का होना चाहिए")
    .max(50, "नाम 50 अक्षरों से अधिक नहीं हो सकता"),
  email: z.string().email("कृपया एक वैध ईमेल पता दर्ज करें"),
  message: z
    .string()
    .min(10, "संदेश कम से कम 10 अक्षरों का होना चाहिए")
    .max(500, "संदेश 500 अक्षरों से अधिक नहीं हो सकता"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
