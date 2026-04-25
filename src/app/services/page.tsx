import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Cardonal Construction",
  description:
    "Explore Cardonal Construction's full range of services including residential, commercial, renovation, and project management.",
};

const services = [
  {
    title: "Residential Construction",
    description:
      "Build your dream home from the ground up. We specialize in custom single-family homes, multi-family dwellings, and luxury estates. Our team works closely with you from initial design through final walkthrough.",
    features: [
      "Custom home design & build",
      "Single & multi-family homes",
      "Luxury estate construction",
      "Energy-efficient building",
      "Smart home integration",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Commercial Construction",
    description:
      "From office buildings to retail spaces, we deliver commercial projects that combine functionality with aesthetics. Our commercial division has the expertise and resources to handle projects of any scale.",
    features: [
      "Office buildings & complexes",
      "Retail & restaurant build-outs",
      "Warehouse & industrial facilities",
      "Medical & healthcare facilities",
      "Tenant improvements",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Renovations & Remodeling",
    description:
      "Transform your existing space with expert renovations. Whether it's a kitchen remodel, bathroom upgrade, or a complete home transformation, we breathe new life into existing structures.",
    features: [
      "Kitchen & bathroom remodels",
      "Whole-home renovations",
      "Basement finishing",
      "Room additions & expansions",
      "Historic restoration",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
        />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "Our experienced project managers oversee every aspect of your build, ensuring quality, safety, and timely delivery. We coordinate all trades and keep you informed at every stage.",
    features: [
      "End-to-end project oversight",
      "Budget management & reporting",
      "Schedule coordination",
      "Quality assurance inspections",
      "Permit & compliance management",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Design-Build",
    description:
      "Streamline your project with our design-build approach. We handle everything from architectural design to final construction, providing a single point of contact throughout the process.",
    features: [
      "Architectural design services",
      "3D rendering & visualization",
      "Integrated design-build delivery",
      "Value engineering",
      "Single point of accountability",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Pre-Construction Services",
    description:
      "Set your project up for success before breaking ground. Our pre-construction services include feasibility studies, cost estimation, and planning to ensure a smooth build process.",
    features: [
      "Feasibility analysis",
      "Cost estimation & budgeting",
      "Site evaluation",
      "Permit acquisition",
      "Subcontractor coordination",
    ],
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 text-sm font-medium tracking-widest uppercase mb-2">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">What We Build</h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl">
            Comprehensive construction services from concept to completion.
            Whatever you&apos;re building, we have the expertise to deliver.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-navy mb-4">{service.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-medium leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-dark"
                      >
                        <svg
                          className="w-5 h-5 text-blue-accent shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-gray-light rounded-lg aspect-[4/3] flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto text-navy/20 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-navy/40 text-sm">Service Photo</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-accent text-sm font-medium tracking-widest uppercase mb-2">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We meet to discuss your vision, needs, and budget.",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Detailed plans, timelines, and cost estimates are developed.",
              },
              {
                step: "03",
                title: "Construction",
                desc: "Our skilled team brings your project to life with precision.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Final inspection, walkthrough, and handover of your project.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and let&apos;s discuss how
            we can bring your project to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
