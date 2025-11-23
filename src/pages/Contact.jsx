import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-32 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-blue-400"
      >
        Get in touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-300 mt-4 max-w-2xl"
      >
        Feel free to reach out to me for opportunities, collaborations, or any interesting project!
      </motion.p>

      <div className="mt-10 bg-[#10141f] p-8 rounded-xl shadow-xl w-full max-w-2xl border border-gray-800">
        
        <form
          action="https://formspree.io/f/mqajdbqv"
          method="POST"
          className="space-y-6"
        >
          <div className="text-left space-y-2">
            <label className="text-gray-300 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-[#0b0f19] border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="text-left space-y-2">
            <label className="text-gray-300 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-[#0b0f19] border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="text-left space-y-2">
            <label className="text-gray-300 font-semibold">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-[#0b0f19] border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-400 text-sm">
          <p><strong>Phone:</strong> +91 8688931323</p>
          <p><strong>Email:</strong> lokesh.mayakuntla2004@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
