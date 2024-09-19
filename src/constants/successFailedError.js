export const successFailedError = [
  {
    path: "/contact/success",
    text1: "Success.",
    text2: "Message sent!",
    helperText: "I will contact you as soon as possible.",
    buttonText: "Back to contact",
    linkTo: "/contact",
  },
  {
    path: "/contact/failed",
    text1: "Failed.",
    text2: "Message not sent!",
    helperText: "Try again later.",
    buttonText: "Back to contact",
    linkTo: "/contact",
  },
  {
    path: "*",
    text1: "Error 404",
    text2: "Are you lost?",
    helperText: "Page doesn't exist.",
    buttonText: "Back to home",
    linkTo: "/",
  },
];
