import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Cardonal Construction",
  description:
    "Browse our portfolio of completed residential, commercial, and renovation projects.",
};

const categories = ["All", "Residential", "Commercial", "Renovation"];

const projects = [
  {
    title: "Lakewood Modern Estate",
    category: "Residential",
    description:
      "A 4,500 sq ft modern custom home featuring open-concept living, energy-efficient systems, and premium finishes throughout.",
    details: "4,500 sq ft | 5 Bed, 4 Bath",
    color: "bg-navy/8",
  },
  {
    title: "Metro Business Center",
    category: "Commercial",
    description:
      "A 3-story, 25,000 sq ft Class A office building with modern amenities, underground parking, and LEED certification.",
    details: "25,000 sq ft | 3 Stories",
    color: "bg-blue-accent/8",
  },
  {
    title: "Victorian Heritage Restoration",
    category: "Renovation",
    description:
      "Complete restoration of a 1920s Victorian home, preserving original architectural details while adding modern conveniences.",
    details: "3,200 sq ft | Full Restoration",
    color: "bg-navy/8",
  },
  {
    title: "Riverside Townhomes",
    category: "Residential",
    description:
      "A community of 12 luxury townhomes with contemporary design, private terraces, and shared green spaces.",
    details: "12 Units | 2,100 sq ft each",
    color: "bg-blue-accent/8",
  },
  {
    title: "The Craft Brewery Build-Out",
    category: "Commercial",
    description:
      "Full build-out of a 10,000 sq ft craft brewery and taproom, including custom bar, kitchen, and brewing facilities.",
    details: "10,000 sq ft | Brewery & Taproom",
    color: "bg-navy/8",
  },
  {
    title: "Mid-Century Kitchen Remodel",
    category: "Renovation",
    description:
      "Complete kitchen transformation with custom cabinetry, quartz countertops, and state-of-the-art appliances.",
    details: "450 sq ft | Kitchen",
    color: "bg-blue-accent/8",
  },
  {
    title: "Hillside Contemporary Home",
    category: "Residential",
    description:
      "A striking 3,800 sq ft hillside home with floor-to-ceiling windows, cantilevered deck, and panoramic views.",
    details: "3,800 sq ft | 4 Bed, 3 Bath",
    color: "bg-navy/8",
  },
  {
    title: "Downtown Medical Office",
    category: "Commercial",
    description:
      "A 15,000 sq ft medical office build-out with specialized treatment rooms, imaging suites, and patient-focused design.",
    details: "15,000 sq ft | Medical",
    color: "bg-blue-accent/8",
  },
  {
    title: "Whole-Home Transformation",
    category: "Renovation",
    description:
      "Complete renovation of a 1970s ranch home, including new layout, additions, and modern finishes inside and out.",
    details: "2,800 sq ft | Full Renovation",
    color: "bg-navy/8",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 text-sm font-medium tracking-widest uppercase mb-2">
            Our Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Our Projects</h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl">
            Explore our portfolio of completed projects spanning residential,
            commercial, and renovation work.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-colors ${
                  cat === "All"
                    ? "border-blue-accent text-blue-accent"
                    : "border-transparent text-gray-medium hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`${project.color} aspect-[4/3] flex items-center justify-center`}
                >
                  <div className="text-center p-6">
                    <svg
                      className="w-14 h-14 mx-auto text-navy/20 mb-3"
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
                    <p className="text-navy/40 text-sm">Project Photo</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-medium">
                      {project.details}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life. Contact us
            for a free consultation and project estimate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
