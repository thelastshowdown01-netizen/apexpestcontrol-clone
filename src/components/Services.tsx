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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[20px] text-[#42526E] tracking-tight leading-relaxed"
          >
            Specialized treatment protocols designed for every environment.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                className="group flex items-start gap-5 cursor-pointer"
              >
                <div className="w-[60px] h-[60px] bg-[#1a1a1b] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-[0_10px_20px_rgba(26,26,27,0.3)] transition-all duration-300">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[22px] font-heading font-black text-[#1a1a1b] mb-3 leading-tight tracking-tight group-hover:text-[#00a0e3] transition-colors">{item.title}</h3>

                  {priceText && (
                    <p className="text-[#5E6C84] mb-2 leading-relaxed text-[16px]">{priceText}</p>
                  )}
                  <p className="text-[#5E6C84] mb-4 leading-relaxed text-[16px]">{remainingDesc}</p>

                  <span className="inline-flex items-center gap-1.5 text-[#ffad00] font-bold text-[15px] group-hover:gap-2 transition-all mt-auto self-start">
                    Learn more <ArrowRight className="w-4 h-4" />
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
