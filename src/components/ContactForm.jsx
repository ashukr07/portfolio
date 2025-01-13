import { SendIcon, X } from "lucide-react";
import { styles } from "../styles";
import {  motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Ashutosh Kumar Roy",
          to_email: "ashutoshroy3434@gmail.com",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.")
          
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Ahh, something went wrong. Please try again.")
        }
      );
  };



  return (
    <div className="relative">

      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="border-2 border-primary rounded-2xl bg-base-100 p-4"
      >
        <p className={styles.sectionHeadText}>Contact.</p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-2">
            <label>Enter your name: </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                onChange={handleChange}
                type="text"
                className="grow"
                value={form.name}
                name="name"
                required
                placeholder="Name"
              />
            </label>
          </div>

          <div className="space-y-2">
            <label>Enter your email: </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                value={form.email}
                name="email"
                required={true}
                placeholder="Email"
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label>Enter your message: </label>
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-lg w-full"
              value={form.message}
              name="message"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button disabled={loading} className="btn btn-primary">
              <span>{loading ? "Sending..." : "Send"}</span>
              <SendIcon size={16} />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
