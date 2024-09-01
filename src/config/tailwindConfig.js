tailwind.config = {
  content: ["../*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown01: "#E8DBC7",
        brown02: "#BB9F9B",
        brown03: "#CBB1A1",
        brown04: "#E0CEC2",
        white01: "#FEFFFD",
      },
      screens: {
        mobile: "378px",
        "mobile-l": "427px",
        tablet: "768px",
      },
      lineHeight: {
        "leading-snug": "1.3",
      },
    },
  },
};
