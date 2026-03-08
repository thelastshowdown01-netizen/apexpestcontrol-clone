import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Leaf, Bug, Zap, Crosshair } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden min-h-[95vh] flex items-center bg-[#111111]">
      {/* Decorative animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated gradients */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00a0e3] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#ffad00] rounded-full blur-[150px]"
        />

        {/* Floating background bugs/icons */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[30%] text-[#00a0e3]/10"
        >
          <Bug size={120} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[10%] text-[#ffad00]/10"
        >
          <Crosshair size={80} />
        </motion.div>

        {/* Particle dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] mix-blend-screen opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00a0e3]/10 border border-[#00a0e3]/30 text-[#00a0e3] font-semibold text-sm mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,160,227,0.15)] hover:bg-[#00a0e3]/20 transition-colors"
            >
              <Zap className="w-5 h-5 fill-[#00a0e3]/20" />
              <span>Certified Professional Services</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 tracking-tight">
              {tenant.heroHeadline} <br />
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00a0e3] to-[#40c4ff] drop-shadow-lg"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                style={{ backgroundSize: '200% auto' }}
              >
                {tenant.heroHeadlineAccent}
              </motion.span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              {tenant.heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-[#00a0e3] text-white px-8 py-4 rounded-full font-heading font-bold text-lg text-center shadow-[0_0_30px_rgba(0,160,227,0.3)] hover:shadow-[0_0_40px_rgba(0,160,227,0.5)] transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">{tenant.heroCta1}</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </motion.a>
              <motion.a
                href={`tel:${tenant.phoneFull}`}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-transparent backdrop-blur-md border-[2px] border-white/20 text-white px-8 py-4 rounded-full font-heading font-bold text-lg text-center transition-all flex items-center justify-center gap-2 group"
              >
                <span className="group-hover:animate-bounce">📞</span> {tenant.heroCta2}
              </motion.a>
            </div>

            {/* Quick Trust Attributes */}
            <div className="mt-12 flex flex-wrap gap-6 items-center opacity-80">
              {tenant.certifications.slice(0, 3).map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#ffad00]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide uppercase text-gray-300">{cert.fullTitle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Content */}
          <div className="lg:col-span-6 relative perspective-1000 mt-10 lg:mt-0">
            {/* The Main Hovering Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="relative z-10 rounded-[32px] p-3 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="relative overflow-hidden rounded-[24px]">
                  <motion.img
                    src={tenant.heroImage}
                    alt="Professional Pest Control"
                    className="w-full h-auto aspect-[4/3] object-cover"
                    referrerPolicy="no-referrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  {/* Inner overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.5 }}
            >
              <motion.div
                className="absolute -bottom-8 -left-8 z-20 bg-[#1a1a1b] p-6 rounded-2xl shadow-2xl border border-white/10 max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              >
                <h3 className="text-white font-heading text-xl font-black mb-2 tracking-wide">Over {tenant.stats.homesProtected} Homes</h3>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-[#ffad00] text-[#ffad00]" />)}
                </div>
                <p className="text-gray-400 text-sm font-medium">{tenant.stats.avgRating} ★ from {tenant.stats.googleReviews} Reviews</p>
              </motion.div>
            </motion.div>

            {/* Floating Professional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring", bounce: 0.5 }}
            >
              <motion.div
                className="absolute -top-6 -right-6 z-30 bg-[#ffad00] p-5 rounded-2xl shadow-[0_15px_30px_rgba(255,173,0,0.3)] border border-[#ffad00]/50 flex items-center justify-center transform rotate-6"
                animate={{ rotate: [6, 12, 6], scale: [1, 1.05, 1] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="text-[#1a1a1b] font-heading font-black text-center leading-tight tracking-widest">
                  <span className="text-3xl block">20+ YRS</span>
                  <span className="text-xs border-t-2 border-[#1a1a1b]/20 pt-1 mt-1 block font-bold">EXPERIENCE</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
