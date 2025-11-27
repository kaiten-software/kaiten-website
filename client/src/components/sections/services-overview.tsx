import ServiceCard from "@/components/ui/service-card";
import { SERVICES } from "@/lib/constants";

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 section-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 font-headers">Our Technology <span className="gradient-text-primary">Expertise</span></h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that transform businesses and
            accelerate growth. Specializing in powerful business technology that drives real operational improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              color={service.color}
              path={service.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
