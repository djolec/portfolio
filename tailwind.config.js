/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderLight: "#C9C9C9",
        borderDark: "rgba(107, 114, 128, 0.4)",
        veryDark: "#141517",
        heroGray: "#999D9E",
        blue: "#455CE9",
        darkBlue: "#334BD3",
      },
      margin: {
        heroMargin: "clamp(0rem, -2.2321rem + 10.5038vw, 10.3725rem)",
      },
      height: {
        buttonHeight2: "clamp(9em, 12vw, 11em)",
        ovalButtonHeight: "clamp(2rem, 5vw + 0.5rem, 4.5rem)",
      },
      width: {
        buttonWidth2: "clamp(9em, 12vw, 11em)",
        iconWidth: "clamp(3.577rem, 3.2659rem + 1.5552vw, 5.1322rem)",
      },
      padding: {
        headingPadding: "clamp(5rem, 17vw + 0.2rem , 21rem)",
        paddingX: "clamp(0.8709rem, -7.8489rem + 21.7995vw, 18.3106rem)",
        paddingX06: "clamp(0.5225rem, -4.7093rem + 13.0797vw, 10.9864rem)",
        paddingX04: "clamp(0.3484rem, -3.1396rem + 8.7198vw, 7.3242rem)",
      },
      gap: {
        formGap: "clamp(3.1104rem, 2.1151rem + 4.9766vw, 8.087rem)",
      },
      fontSize: {
        buttonText: "clamp(0.7rem, 1.1vw + 0.2rem, 1.5rem)",
        roundButtonText: "clamp(18px, 1.2vw, 21px)",
        socialsText: "clamp(16px, 1.15vw, 18px)",
        bodyText: "clamp(16px, 1.2vw, 19px)",
        footerHeader: "clamp(2.84375em, 6.125vw, 7em)",
        headerNav: "clamp(1.125rem, 0.975rem + 0.75vw, 1.875rem)",
        tabletHeaderNav: "clamp(1.1em, 1.2em, 1.4em)",
        heroSliding: "clamp(6.6874rem, 3.5008rem + 13.0328vw, 40.2396rem)",
        hero: "clamp(2rem, 1.6234rem + 1.7722vw, 3.75rem)",
        headingClamp: "clamp(2.9549rem, 2.1462rem + 4.0435vw, 6.9984rem)",
        projectInfo: "clamp(1.0109rem, 0.902rem + 0.5443vw, 1.5552rem)",
        projectFont: "clamp(1.4774rem, 1.3152rem + 0.8114vw, 2.2888rem)",
        projectFont2: "clamp(3.6547rem, 2.9361rem + 3.5932vw, 7.2479rem)",
        pageTransition: "clamp(3.1104rem, 2.7994rem + 1.5552vw, 4.6656rem)",
      },
      screens: {
        tablet: {
          raw: "(min-width: 600px) and (pointer: coarse)",
        },
        md: "800px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
