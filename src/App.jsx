import "./App.css";
import Introduction from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className="w-screen h-full flex flex-col absolute left-0 top-0">
      <Navbar />
      <Introduction />
      <Products />
      <ContactUs />
      <Analytics />
    </main>
  );
}

export default App;
