import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Residential Construction",
    description:
      "Custom homes built to your specifications with premium materials and expert craftsmanship.",
    icon: (
      <svg
        className="w-8 h-8"
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
      "Office buildings, retail spaces, and commercial facilities built on time and on budget.",
    icon: (
      <svg
        className="w-8 h-8"
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
    title: "Renovations",
    description:
      "Transform your existing space with our expert renovation and remodeling services.",
    icon: (
      <svg
        className="w-8 h-8"
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
      "End-to-end project oversight ensuring quality, safety, and timely delivery.",
    icon: (
      <svg
        className="w-8 h-8"
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
];

const whyUs = [
  {
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "On Time & On Budget",
    description: "We respect your timeline and deliver within the agreed scope.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Materials",
    description: "We use only premium, industry-leading materials on every job.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Free Estimates",
    description: "Get a detailed, no-obligation quote for your project today.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const featuredProjects = [
  {
    title: "Modern Family Residence",
    category: "Residential",
    color: "bg-navy/10",
  },
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    color: "bg-blue-accent/10",
  },
  {
    title: "Heritage Home Renovation",
    category: "Renovation",
    color: "bg-navy/10",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy opacity-90" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-40">
          <div className="max-w-3xl">
            <p className="text-blue-300 text-sm font-medium tracking-widest uppercase mb-4">
              Building Excellence
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
              We Build Your{" "}
              <span className="text-blue-300">Vision</span> Into Reality
            </h1>
            <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              From concept to completion, Cardonal Construction delivers
              exceptional quality in every project. Residential, commercial, and
              renovation services you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-navy px-8 py-4 rounded font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-center hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="text-blue-accent shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-medium mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-light py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-accent text-sm font-medium tracking-widest uppercase mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Our Services
            </h2>
            <p className="text-gray-medium mt-4 max-w-2xl mx-auto">
              Comprehensive construction services tailored to meet your unique
              needs and exceed your expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-navy mb-4 group-hover:text-blue-accent transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-navy text-white px-8 py-3 rounded font-medium hover:bg-navy-light transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-accent text-sm font-medium tracking-widest uppercase mb-2">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Featured Projects
            </h2>
            <p className="text-gray-medium mt-4 max-w-2xl mx-auto">
              Take a look at some of our recently completed projects showcasing
              our commitment to quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className={`${project.color} rounded-lg overflow-hidden group`}
              >
                <div className="aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg
                      className="w-16 h-16 mx-auto text-navy/30 mb-4"
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
                    <p className="text-sm text-navy/50">Project Photo</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <span className="text-xs font-medium text-blue-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-navy mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block border-2 border-navy text-navy px-8 py-3 rounded font-medium hover:bg-navy hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get in touch with our team today for a free consultation and
            estimate. Let&apos;s build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-navy px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:5551234567"
              className="border-2 border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
