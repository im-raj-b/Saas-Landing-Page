import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#e8f5f0]">
      {/* Hero Section */}
      <section className="w-full px-4 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              We're on a mission to make work more productive
            </h1>
            <div className="w-24 h-1 bg-[#4CAF82] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg">
              Biccas is a team of passionate individuals who are dedicated to
              helping businesses and individuals increase their productivity and
              achieve their goals.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <img
              loading="lazy"
              src="https://placehold.co/1400x500?text=Team+Photo"
              alt="Biccas Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                Meet Our Team
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2018, Biccas started with a simple idea: to create
                  tools that make work more organized, efficient, and enjoyable.
                  Our founders, who had experienced the challenges of managing
                  complex projects firsthand, set out to build a solution that
                  would transform how teams collaborate.
                </p>
                <p>
                  What began as a small startup with just 5 team members has now
                  grown into a global company serving over 25,000 teams
                  worldwide. Throughout our journey, we've remained committed to
                  our core mission of increasing productivity while making the
                  experience delightful.
                </p>
                <p>
                  Today, Biccas offers a comprehensive suite of tools designed
                  to streamline workflows, enhance collaboration, and provide
                  valuable insights through analytics. We're proud of how far
                  we've come, but we're even more excited about the road ahead.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl">
                <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                  {/* <Users size={24} /> */}
                </div>
                <h3 className="text-xl font-bold mb-2">25,000+</h3>
                <p className="text-gray-600">Teams using our platform</p>
              </div>
              <div className="bg-white p-6 rounded-3xl">
                <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                  {/* <Globe size={24} /> */}
                </div>
                <h3 className="text-xl font-bold mb-2">120+</h3>
                <p className="text-gray-600">Countries with active users</p>
              </div>
              <div className="bg-white p-6 rounded-3xl">
                <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                  {/* <Award size={24} /> */}
                </div>
                <h3 className="text-xl font-bold mb-2">15+</h3>
                <p className="text-gray-600">Industry awards</p>
              </div>
              <div className="bg-white p-6 rounded-3xl">
                <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                  {/* <Building size={24} /> */}
                </div>
                <h3 className="text-xl font-bold mb-2">5</h3>
                <p className="text-gray-600">Global offices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-gray-700">
              These core principles guide everything we do at Biccas, from
              product development to customer support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fe] p-8 rounded-3xl">
              <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                {/* <CheckCircle2 size={24} /> */}
              </div>
              <h3 className="text-xl font-bold mb-3">User-Centered Design</h3>
              <p className="text-gray-700">
                We believe that the best products are built with users in mind.
                Every feature we develop starts with understanding user needs
                and pain points.
              </p>
            </div>

            <div className="bg-[#f8f9fe] p-8 rounded-3xl">
              <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                {/* <CheckCircle2 size={24} /> */}
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
              <p className="text-gray-700">
                We're never satisfied with the status quo. We constantly seek
                feedback and iterate on our products to make them better every
                day.
              </p>
            </div>

            <div className="bg-[#f8f9fe] p-8 rounded-3xl">
              <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                {/* <CheckCircle2 size={24} /> */}
              </div>
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-gray-700">
                We believe in open communication with our team and our
                customers. We share our successes, challenges, and roadmap
                openly.
              </p>
            </div>

            <div className="bg-[#f8f9fe] p-8 rounded-3xl">
              <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                {/* <CheckCircle2 size={24} /> */}
              </div>
              <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
              <p className="text-gray-700">
                We practice what we preach. By creating tools that enhance
                productivity, we aim to give people more time for what matters
                most in life.
              </p>
            </div>

            <div className="bg-[#f8f9fe] p-8 rounded-3xl">
              <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                {/* <CheckCircle2 size={24} /> */}
              </div>
              <h3 className="text-xl font-bold mb-3">Diversity & Inclusion</h3>
              <p className="text-gray-700">
                We believe that diverse teams build better products. We're
                committed to creating an inclusive environment where everyone
                can thrive.
              </p>
            </div>

            <div className="bg-[#f8f9fe] p-8 rounded-3xl">
              <div className="bg-[#4CAF82] p-3 inline-flex rounded-xl text-white mb-4">
                {/* <CheckCircle2 size={24} /> */}
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Success</h3>
              <p className="text-gray-700">
                Our success is measured by our customers' success. We're
                dedicated to helping our users achieve their goals through our
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-700">
              Meet the people who are driving Biccas forward and helping shape
              the future of work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-Founder",
                image: "https://placehold.co/400x400?text=Sarah+J",
                bio: "With over 15 years of experience in SaaS, Sarah leads our company vision and strategy.",
              },
              {
                name: "Michael Chen",
                role: "CTO & Co-Founder",
                image: "https://placehold.co/400x400?text=Michael+C",
                bio: "Michael oversees our technical direction and ensures we're building scalable, secure solutions.",
              },
              {
                name: "Aisha Patel",
                role: "Chief Product Officer",
                image: "https://placehold.co/400x400?text=Aisha+P",
                bio: "Aisha leads our product team, focusing on creating intuitive and powerful user experiences.",
              },
              {
                name: "David Kim",
                role: "Chief Marketing Officer",
                image: "https://placehold.co/400x400?text=David+K",
                bio: "David drives our marketing strategy and helps us connect with teams around the world.",
              },
              {
                name: "Elena Rodriguez",
                role: "VP of Customer Success",
                image: "https://placehold.co/400x400?text=Elena+R",
                bio: "Elena ensures our customers get the most value from our platform and have an exceptional experience.",
              },
              {
                name: "James Wilson",
                role: "VP of Engineering",
                image: "https://placehold.co/400x400?text=James+W",
                bio: "James leads our engineering team, building robust and scalable solutions for our customers.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl">
                <div className="mb-4 rounded-2xl overflow-hidden aspect-square">
                  <img
                    loading="lazy"
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#4CAF82] font-medium mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
