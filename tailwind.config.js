import { withUt } from "uploadthing/tw";

export default withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: ["class"],
  plugins: [require("@tailwindcss/forms")],
});
