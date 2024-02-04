/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: "24px",
        xl: "11rem",
      },
    },
    fontFamily: {
      main: ["Kumbh Sans", "sans-serif"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      smallPosition: "center top -160px",
      bigPosition: "right -250px top -450px",
      footerBg: "right 100px top -620px",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      mobile: "460px",
      desktop: "1040px",
      bgCards: "50% auto",
      // desktop: "1260px",
    },
    extend: {
      colors: {
        blue: "hsl(228, 100%, 66%)",
        lighterBlue: "hsl(228, 100%, 90%)",
        lightBlueHover: "hsl(228, 100%, 85%)",
        lightBlue: "hsl(228, 100%, 75%)",
        lightBlueBox: "hsl(228, 100%, 95%)",
        redSalmon: "hsl(0, 83%, 65%)",
        lightGrey: "hsl(227, 13%, 52%)",
        mediumGrey: "hsl(228, 22%, 26%)",
        darkGrey: "hsl(229, 22%, 19%)",
      },
      backgroundImage: {
        charts: "url(../../assets/home/illustration-charts.svg)",
        headerPattern: "url(../../assets/home/bg-pattern-header.svg)",
        pricingPattern: "url(../../assets/home/bg-pattern-pricing.svg)",
        footerPattern: "url(../../assets/home/bg-pattern-footer.svg)",
        bgPatternSide: "url(../../assets/sign-up/bg-pattern-side.svg)",
      },
    },
  },
  plugins: [],
};
