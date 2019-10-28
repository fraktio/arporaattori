import Typography from "typography";

const typography = new Typography({
  includeNormalize: true,
  baseFontSize: "14px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Nunito", "sans-serif"],
  googleFonts: [
    {
      name: "Nunito",
      styles: ["400, 400i, 700, 700i"]
    }
  ]
});

export default typography;
