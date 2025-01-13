import ContactForm from "../components/ContactForm";
import EarthCanvas from "../components/Earth";

function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center bg-base-200 overflow-hidden pt-20" // Added padding-top
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 z-10">
          
          <ContactForm />
        </div>
        {/* Earth Canvas */}
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center relative z-0 overflow-hidden">
          <div className="w-full h-[400px] md:h-[500px]">
            <EarthCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
