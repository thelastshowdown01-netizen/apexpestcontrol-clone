import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Search, ShieldAlert, Home, Bug } from 'lucide-react';
import { tenant } from '../tenantConfig';

const iconMap: Record<string, any> = { PhoneCall, Search, ShieldAlert, Home, Bug };

export default function Steps() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00a0e3] font-bold tracking-widest uppercase text-[12px] mb-4 block"
          >
            HOW IT WORKS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-heading font-black text-[#1a1a1b] leading-[1.1]"
          >
            Get pest-free in <span className="text-[#00a0e3]">3 simple<br />steps.</span>
          </motion.h2>
        </div>

        <div className="relative mt-20 max-w-6xl mx-auto">
          {/* Connector Line behind circles */}
          <div className="hidden md:block absolute top-[64px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {tenant.steps.map((step, index) => {
              const Icon = iconMap[step.iconName] || Bug;
              const isMiddle = index === 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', bounce: 0.3 }}
                  className="flex flex-col items-center md:items-start group"
                >
                  <div className="relative mb-8">
                    <motion.div
                      className={`w-[130px] h-[130px] bg-white rounded-full flex items-center justify-center relative z-10
                                transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                                group-hover:shadow-[0_20px_40px_rgba(0,160,227,0.15)] group-hover:-translate-y-2`}
                    >
                      {/* Subtle hover glow ring */}
                      <div className="absolute inset-0 rounded-full border border-[#00a0e3]/0 group-hover:border-[#00a0e3]/30 transition-colors duration-500" />

                      {/* The Icon inside */}
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${isMiddle ? 'text-[#00a0e3]' : 'text-black'} group-hover:scale-110`} strokeWidth={2} />
                    </motion.div>

                    {/* Step Number Badge */}
                    <div className="absolute top-0 right-0 z-20 transform translate-x-1 -translate-y-1">
                      <div className="bg-[#1f3d5c] w-11 h-11 rounded-full border-[3px] border-white flex items-center justify-center text-white font-heading font-bold text-[15px] shadow-sm">
                        {step.num}
                      </div>
                    </div>
                  </div>

                  <h3 className={`text-[20px] font-heading font-black mb-3 text-center md:text-left transition-colors ${isMiddle ? 'text-[#00a0e3]' : 'text-[#1a1a1b]'} group-hover:text-[#ffad00]`}>
                    {step.title}
                  </h3>
                  <p className="text-[#5E6C84] text-[16px] leading-[1.6] text-center md:text-left">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-col sm:flex-row justify-center md:justify-start gap-5 items-center max-w-6xl mx-auto"
        >
          <a href={`tel:${tenant.phoneFull}`} className="cursor-pointer bg-white border-2 border-[#1a1a1b] text-[#1a1a1b] px-10 py-[18px] rounded-full font-heading font-black text-[17px] text-center hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto hover:-translate-y-1">
            <PhoneCall className="w-[18px] h-[18px]" strokeWidth={2.5} />
            Call {tenant.phone}
          </a>
          <a href="#quote" className="cursor-pointer bg-[#00a0e3] text-white px-10 py-[20px] rounded-full font-heading font-black text-[17px] text-center hover:bg-[#008dcb] transition-all duration-300 w-full sm:w-auto shadow-lg shadow-[#00a0e3]/20 hover:shadow-xl hover:shadow-[#00a0e3]/40 hover:-translate-y-1">
            Book Free Inspection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
