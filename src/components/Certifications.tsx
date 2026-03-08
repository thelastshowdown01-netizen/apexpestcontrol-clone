import React from 'react';
import { motion } from 'motion/react';
import { tenant } from '../tenantConfig';

export default function Certifications() {
  return (
    <section className="py-24 bg-[#111111] text-white relative overflow-hidden" id="credentials">
      {/* Abstract Background Vectors - Diagonal lines like in screenshot */}
      <div className="absolute inset-0 opacity-20 MixBlendMode-overlay" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222), repeating-linear-gradient(45deg, #222 25%, #111 25%, #111 75%, #222 75%, #222)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-white tracking-tight"
          >
            Credentials that set us<br />apart.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-400"
          >
            Ensuring maximum safety and compliance for every property we treat.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 max-w-5xl mx-auto">
          {tenant.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col items-center group perspective-1000"
            >
              <div className="w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center mb-8 relative bg-[#151515] hover:bg-[#1a1a1a] transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)] cursor-pointer overflow-visible">
                {/* Thin outer ring */}
                <motion.div
                  className="absolute inset-0 border border-white/5 rounded-full group-hover:border-brand-accent/40 transition-colors duration-500"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i }}
                />

                {/* Subtle outer glow on hover */}
                <div className="absolute -inset-4 bg-brand-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center justify-center mt-2 group-hover:scale-110 transition-transform duration-500">
                  <span className="font-heading font-black text-2xl text-[#00a0e3] tracking-wide mb-1">{cert.label}</span>
                  <span className="font-heading font-bold text-[1.4rem] text-white leading-none">{cert.value}</span>
                </div>
              </div>

              <motion.h3
                className="font-heading font-bold text-2xl mb-2 text-center text-white group-hover:text-brand-accent transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {cert.fullTitle}
              </motion.h3>
              <p className="text-[15px] font-medium text-gray-400 max-w-[200px] text-center leading-relaxed">
                {cert.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
