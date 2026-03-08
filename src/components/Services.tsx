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
                className="group flex items-start gap-5 cursor-pointer p-5 -m-5 rounded-[24px] hover:bg-gray-50/80 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >
                {/* Icon Box */}
                <motion.div
                  className="w-[56px] h-[56px] bg-[#1a1a1b] rounded-[16px] flex items-center justify-center text-white flex-shrink-0 relative overflow-hidden transition-colors duration-500 shadow-sm"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -8, 8, -8, 0],
                    backgroundColor: "#00a0e3",
                    boxShadow: "0 15px 30px rgba(0, 160, 227, 0.4)"
                  }}
                  transition={{ rotate: { duration: 0.5, ease: "easeInOut" }, scale: { type: "spring", stiffness: 300 } }}
                >
                  <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full blur-xl"></div>
                  <Icon className="w-6 h-6 relative z-10" strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col pt-1">
                  <h3 className="text-[20px] font-heading font-black text-[#1a1a1b] mb-2 leading-tight tracking-tight group-hover:text-[#00a0e3] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {priceText && (
                    <p className="text-[#5E6C84] mb-2 leading-relaxed text-[15px] font-medium">{priceText}</p>
                  )}
                  <p className="text-[#5E6C84] mb-4 leading-relaxed text-[15px]">{remainingDesc}</p>

                  <span className="inline-flex items-center gap-1.5 text-[#ffad00] font-bold text-[14px] mt-auto self-start group-hover:text-[#ffad00]">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={2.5} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
