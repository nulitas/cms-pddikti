/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#5533BF",
        "primary-surface": "#F7F5FC",
        "primary-hover": "#4322A8",
        "primary-pressed": "#3A1F8C",
        "primary-focus": "#5E3CC6",
        "primary-border": "#E3DBFF",

        "neutral-10": "#FFFFFF",
        "neutral-20": "#F5F5F5",
        "neutral-30": "#EDEDED",
        "neutral-40": "#E0E0E0",
        "neutral-50": "#C2C2C2",
        "neutral-60": "#9E9E9E",
        "neutral-70": "#757575",
        "neutral-80": "#616161",
        "neutral-90": "#404040",
        "neutral-100": "#0A0A0A",

        "success-main": "#4A934A",
        "success-surface": "#E4F5E4",
        "success-border": "#C3DBC3",
        "success-hover": "#3D7B3D",
        "success-pressed": "#2D6B2D",

        "danger-main": "#C63C3C",
        "danger-surface": "#FFF2F2",
        "danger-border": "#FFC8C8",
        "danger-hover": "#B32727",
        "danger-pressed": "#8F1A1A",

        "warning-main": "#E1A52F",
        "warning-surface": "#FFF6E3",
        "warning-border": "#F3DDB3",
        "warning-hover": "#C58E24",
        "warning-pressed": "#956B16",

        "info-main": "#3498DB",
        "info-surface": "#E0F0FB",
        "info-border": "#BBDCF3",
        "info-hover": "#2B7FB6",
        "info-pressed": "#1C5F8D",
      },
      borderColor: {
        "primary-border": "#E3DBFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      boxShadow: {
        "shadow-2": "0px 4px 8px 0px #A100BB1A",
      },
    },
  },
  plugins: [],
};
