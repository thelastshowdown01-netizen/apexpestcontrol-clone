import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Home, Building2, Stethoscope, UtensilsCrossed, Factory, Warehouse, Bug, ShieldAlert, Bed, Mouse, BugOff } from 'lucide-react';
import { tenant } from '../tenantConfig';

const iconMap: Record<string, any> = { Home, Building2, Stethoscope, UtensilsCrossed, Factory, Warehouse, Bug, ShieldAlert, Bed, Mouse, BugOff };

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[20px] text-[#42526E] font-medium tracking-tight leading-relaxed"
          >
            Specialized treatment protocols designed for every environment.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {tenant.services.map((item, index) => {
            const Icon = iconMap[item.iconName] || Bug;

            // Try to split "Starts from" if it exists for the formatting
            let priceText = "";
            let remainingDesc = item.description;
            if (item.description.includes("Starts from")) {
              const parts = item.description.split('. ');
              priceText = parts[0] + ".";
              remainingDesc = parts.slice(1).join('. ');
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 80 }}
                className="group flex flex-col md:flex-row items-start gap-6 cursor-pointer p-8 rounded-[32px] bg-white hover:bg-white transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,160,227,0.12)] border border-gray-100 hover:border-[#00a0e3]/30 hover:-translate-y-3 relative overflow-hidden"
              >
                {/* Background Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a0e3]/5 rounded-full blur-3xl group-hover:bg-[#00a0e3]/20 transition-colors duration-500 pointer-events-none"></div>

                {/* Icon Box */}
                <motion.div
                  className="w-[72px] h-[72px] bg-[#1a1a1b] rounded-[24px] flex items-center justify-center text-white flex-shrink-0 relative overflow-hidden transition-all duration-500 shadow-lg border-[2px] border-[#1a1a1b] group-hover:border-[#00a0e3]"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -10, 10, -10, 0],
                    backgroundColor: "#00a0e3"
                  }}
                  transition={{ rotate: { duration: 0.6, ease: "easeInOut" }, scale: { type: "spring", stiffness: 300 } }}
                >
                  <div className="absolute inset-0 rounded-[24px] border border-white/10 group-hover:border-white/40 transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full blur-xl"></div>
                  <Icon className="w-8 h-8 relative z-10" strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col flex-1 pt-1 w-full relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-3">
                    <h3 className="text-[22px] font-heading font-black text-[#1a1a1b] leading-tight tracking-tight group-hover:text-[#00a0e3] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {priceText && (
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#e6f6fd] border border-[#00a0e3]/20 group-hover:bg-[#00a0e3] group-hover:scale-105 transition-all duration-300 transform origin-left md:origin-right">
                        <span className="text-[#00a0e3] group-hover:text-white font-bold text-[15px] whitespace-nowrap transition-colors duration-300">
                          {priceText.replace('Starts from', 'From')}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-[#5E6C84] mb-6 leading-relaxed text-[16px]">{remainingDesc}</p>

                  <div className="mt-auto self-start">
                    <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-50 text-[#1a1a1b] font-bold text-[14px] group-hover:bg-[#ffad00] group-hover:text-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:shadow-[0_8px_20px_rgba(255,173,0,0.3)] transition-all duration-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
