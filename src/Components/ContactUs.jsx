import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
function ContactUs() {
  return (
    <section
      className="flex bg-white text-sky-800 w-full h-max justify-between"
      id="ContactUs"
    >
      <div className="flex flex-col">
        <h1 className="text-md text-center sm:mx-8">Contact Us: Anand Chandak</h1>
      </div>

      <div className="sm:mx-8">
        <div>
          <BsFillTelephoneFill className="inline mx-2"></BsFillTelephoneFill>
          <a className="inline mx-2" href="tel:98291-22090">
            98291-22090
          </a>
        </div>
        <div>
          <BsWhatsapp className="inline mx-2"></BsWhatsapp>
          <a className="inline mx-2" href="https://wa.me/919413661050">
            +91 94136-61050
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
