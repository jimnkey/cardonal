import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Cardonal Construction",
  description:
    "Learn about Cardonal Construction's history, values, and the dedicated team behind our exceptional building services.",
};

const values = [
  {
    title: "Quality Craftsmanship",
    description:
      "We never cut corners. Every project is built to the highest standards with premium materials and meticulous attention to detail.",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "Transparent communication, honest pricing, and keeping our promises. We build trust alongside buildings.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Safety First",
    description:
      "Rigorous safety protocols protect our workers, clients, and communities on every job site.",
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
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    ),
  },
  {
    title: "Client Focus",
    description:
      "Your vision drives every decision. We listen, collaborate, and deliver results that exceed expectations.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Carlos Mendoza",
    role: "Founder & CEO",
    bio: "With over 25 years of construction industry experience, Carlos founded Cardonal Construction with a vision for excellence.",
  },
  {
    name: "Maria Santos",
    role: "VP of Operations",
    bio: "Maria oversees all project operations, ensuring every build meets our rigorous standards for quality and safety.",
  },
  {
    name: "James Rivera",
    role: "Lead Project Manager",
    bio: "James brings 15 years of project management expertise, keeping every project on schedule and within budget.",
  },
  {
    name: "Sarah Chen",
    role: "Design Director",
    bio: "Sarah leads our design-build division, transforming client visions into detailed architectural plans.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 text-sm font-medium tracking-widest uppercase mb-2">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl">
            Founded on a passion for quality construction and a commitment to
            our clients&apos; success.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Building Excellence Since Day One
              </h2>
              <div className="space-y-4 text-gray-medium leading-relaxed">
                <p>
                  Cardonal Construction was founded with a simple mission: to
                  deliver exceptional construction services that stand the test
                  of time. What started as a small residential contractor has
                  grown into a full-service construction company serving both
                  residential and commercial clients.
                </p>
                <p>
                  Our growth has been built on a foundation of quality
                  craftsmanship, transparent communication, and an unwavering
                  commitment to our clients&apos; vision. Every project we
                  undertake reflects our dedication to excellence and our passion
                  for building.
                </p>
                <p>
                  Today, with a team of over 50 skilled professionals, we
                  continue to push the boundaries of what&apos;s possible in
                  construction while maintaining the personal touch that has
                  defined us from the beginning.
                </p>
              </div>
            </div>
            <div className="bg-gray-light rounded-lg aspect-[4/3] flex items-center justify-center p-8">
              <img
                src="/images/cc-logo-600.png"
                alt="Cardonal Construction"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-accent text-sm font-medium tracking-widest uppercase mb-2">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-lg">
                <div className="text-navy mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-accent text-sm font-medium tracking-widest uppercase mb-2">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Meet the Leaders
            </h2>
            <p className="text-gray-medium mt-4 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional
              results on every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gray-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-navy/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-accent font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-gray-medium mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            We&apos;d love to hear about your project. Get in touch for a free
            consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
