import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const logos = [
  { name: "Stanford University", src: "/images/logos/stanford.svg" },
  { name: "City of Chicago", src: "/images/logos/chicago.svg" },
  { name: "UNICEF", src: "/images/logos/unicef.svg" },
  { name: "Microsoft", src: "/images/logos/microsoft.svg" },
  { name: "Harvard", src: "/images/logos/harvard.svg" },
  { name: "Red Cross", src: "/images/logos/redcross.svg" },
];

export const TrustedBy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container-custom">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by leading institutions worldwide
        </p>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
