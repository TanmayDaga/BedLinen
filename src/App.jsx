import "./App.css";
import Introduction from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  return (
    <main className="w-screen h-full flex flex-col absolute left-0 top-0">
      <Navbar />
      <Introduction />
      <Products />
      <ContactUs />
    </main>
  );
}

export default App;
