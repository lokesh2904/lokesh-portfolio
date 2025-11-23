import React from "react";
import { motion } from "framer-motion";

const cert1 = "https://i.ibb.co/Nn2k9WQ6/aws.jpg";
const cert2 = "https://i.ibb.co/7JXQkvxx/ds-cert.jpg";
const cert3 = "https://i.ibb.co/0pxyf8Y4/python-cert.jpg";
const cert4 = "https://i.ibb.co/KxFC2dcm/selenium-cert.jpg";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Cloud Certification",
      link: "https://drive.google.com/file/d/1FlGeE-O_w_fEecVcbsYDs-YtuS4cyuK2/view?usp=sharing",
      img: cert1,
    },
    {
      title: "Data Science Certification",
      link: "https://drive.google.com/file/d/1YRuT6yQCm6P-VuJIlaFAHPFNBoz9-ld-/view?usp=sharing",
      img: cert2,
    },
    {
      title: "Programming Essentials in Python – OpenEDG",
      link: "https://drive.google.com/file/d/1t-0h_5cqcffKtVvd5H5icEpbKBpZSoMG/view?usp=sharing",
      img: cert3,
    },
    {
      title: "Selenium with Java",
      link: "https://drive.google.com/file/d/1I9m95YOVkwpc6FqCxb7rj4ZXQFvy5Jr2/view?usp=sharing",
      img: cert4,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-32 px-6 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-blue-400 text-center"
      >
        Certifications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 mt-4 text-lg max-w-2xl text-center"
      >
        Verified achievements from recognized organizations.
      </motion.p>

      <div className="mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {certifications.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#10141f] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-blue-500 transition"
          >
            <img src={c.img} alt={c.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white">{c.title}</h2>
              <p className="text-blue-400 mt-2">Click to view certificate</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
