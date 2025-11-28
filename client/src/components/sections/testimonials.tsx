import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 section-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Client Success Stories</h2>
            <p className="mt-4 text-xl text-slate-600">
              See how we've transformed businesses with cutting-edge technology solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-8 border border-slate-200 animate-pulse">
                <div className="h-4 bg-slate-200 rounded mb-4"></div>
                <div className="h-20 bg-slate-200 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-slate-200 rounded mb-2 w-24"></div>
                    <div className="h-3 bg-slate-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 section-bg-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900">Client Success Stories</h2>
          <p className="mt-4 text-xl text-slate-600">
            See how we've transformed businesses with cutting-edge technology solutions
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.slice(0, 3).map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="flex items-center mb-6">
                <div className="flex text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.i 
                      key={i} 
                      className="fas fa-star"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <motion.div 
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Completed", color: "text-primary" },
              { value: "98%", label: "Client Satisfaction", color: "text-success" },
              { value: "40%", label: "Average Efficiency Gain", color: "text-accent" },
              { value: "6 Months", label: "Average ROI Timeline", color: "text-secondary" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
