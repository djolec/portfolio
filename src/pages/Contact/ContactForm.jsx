import { formData } from "../../constants/formData";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import SocialLink from "../../ui/SocialLink";
import Button from "../../ui/Button";

import { motion } from "framer-motion";

const initialValues = {
  name: "",
  email: "",
  organization: "",
  services: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter a valid name"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter a valid email"),
  message: Yup.string()
    .required("Your message must contain between 20 and 3000 characters")
    .min(20, "Your message must contain between 20 and 3000 characters")
    .max(3000, "Your message must contain between 20 and 3000 characters"),
});

const ContactForm = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    emailjs
      .send("service_71itzuv", "template_pcmslgc", values, {
        publicKey: "1I4E2cy4tQdonYI7d",
      })
      .then(
        () => {
          navigate("/contact/success");
        },
        (error) => {
          navigate("/contact/failed");
          console.log(error);
        },
      );
  };

  return (
    <div className="mx-auto mt-20 w-full max-w-[150rem] px-4 pb-[20vh] text-white sm:px-paddingX sm:text-headingClamp">
      <div className="flex justify-between gap-[70px] sm:flex-row sm:gap-formGap portrait:flex-col-reverse">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form style={{ flexGrow: 1, position: "relative" }}>
              {formData.map((field, index) => (
                <motion.div
                  className={`relative flex w-full flex-col gap-[15px] border-t border-t-gray-500/40 py-[26px] sm:gap-[20px] sm:py-[50px] ${
                    index === formData.length - 1 &&
                    "border-b border-b-gray-500/40"
                  }`}
                  key={field.name}
                >
                  <label
                    className={`text-[1.2rem] transition-colors duration-300 sm:text-[0.3em] sm:portrait:text-[0.35em] ${
                      formik.values[field.name]
                        ? "text-gray-500/90"
                        : "text-white"
                    }`}
                    htmlFor={field.name}
                  >
                    {field.question}
                  </label>

                  {index === formData.length - 1 ? (
                    <Field
                      className="min-h-[150px] border-none bg-transparent text-[1.2rem] text-white outline-none sm:text-[0.25em] sm:portrait:text-[0.3em]"
                      component="textarea"
                      autoComplete="off"
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <Field
                      className="border-none bg-transparent text-[1.2rem] text-white outline-none sm:text-[0.25em] sm:portrait:text-[0.3em]"
                      autoComplete="off"
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  )}
                  <ErrorMessage name={field.name}>
                    {(msg) => (
                      <p className="absolute bottom-[1%] w-[55%] text-[0.8rem] text-red-600 sm:bottom-[10%] sm:w-[60%] sm:text-[0.18em] sm:portrait:text-[0.22em]">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </motion.div>
              ))}

              <div className="absolute right-0 w-fit -translate-y-1/2 text-base leading-none">
                <Button bgColor="bg-[#455CE9]" type="submit">
                  Send it
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="w-full text-left sm:w-1/4">
          <div className="flex flex-col gap-4 text-base sm:text-[0.2em] sm:portrait:text-[0.3em]">
            <h5 className="text-sm text-white/60 sm:text-[0.8em]">
              CONTACT DETAILS
            </h5>

            <SocialLink
              text={"+381 64 328 74 95"}
              href={"tel:+381643287495"}
              xOffset={2.5}
            />

            <SocialLink
              text={"djordjeenglish@gmail.com"}
              href={"mailto:djordjeenglish@gmail.com"}
              xOffset={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
