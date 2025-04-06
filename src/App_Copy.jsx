import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-[#e8f5f0]">
        {/* Navigation */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="text-3xl font-bold text-[#4CAF82]">
              Biccas
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-black font-medium">
                Home
              </a>
              <a href="/product" className="text-gray-500 hover:text-black">
                Product
              </a>
              <a href="/faq" className="text-gray-500 hover:text-black">
                FAQ
              </a>
              <a href="/blog" className="text-gray-500 hover:text-black">
                Blog
              </a>
              <a href="/about" className="text-gray-500 hover:text-black">
                About Us
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="text-gray-700 hover:text-black">
                Login
              </a>
              <a
                href="/signup"
                className="bg-[#4CAF82] text-white px-4 py-2 rounded-md hover:bg-[#3d9c6c]"
              >
                Sign Up
              </a>
            </div>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                We're here to <br />
                Increase your <br />
                Productivity
              </h1>
              <div className="w-48 h-1 bg-[#4CAF82] rounded-full"></div>
              <p className="text-gray-700 max-w-md">
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest features in managing work
                every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/trial"
                  className="bg-[#4CAF82] text-white px-6 py-3 rounded-full hover:bg-[#3d9c6c] inline-flex justify-center"
                >
                  Try free trial
                </a>
                <a
                  href="/demo"
                  className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  <PlayIcon className="h-4 w-4 mr-2" />
                  View Demo
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px]">
                {/* Main image */}
                <div className="absolute inset-0 bg-[#4CAF82] rounded-3xl overflow-hidden flex items-center justify-center">
                  <img
                    src="https://placehold.co/400x500"
                    alt="Productivity Dashboard"
                    className="object-cover"
                  />
                </div>

                {/* Floating UI elements */}
                <div className="absolute top-8 left-4 bg-white p-3 rounded-xl shadow-lg">
                  <div className="text-xs text-gray-500">Total amount</div>
                  <div className="font-bold">$450.00</div>
                  <button className="bg-[#4CAF82] text-white text-xs px-3 py-1 rounded-md mt-1">
                    Send
                  </button>
                </div>

                <div className="absolute bottom-16 left-4 bg-white p-3 rounded-xl shadow-lg">
                  <div className="text-xs text-gray-500">Total income</div>
                  <div className="font-bold">$245.00</div>
                  <div className="h-4 w-12 mt-1">
                    <svg viewBox="0 0 100 30" className="h-full w-full">
                      <polyline
                        points="0,30 20,15 40,20 60,5 80,15 100,0"
                        fill="none"
                        stroke="#4CAF82"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-1/4 right-4 bg-[#6366f1] p-2 rounded-lg shadow-lg">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="absolute top-8 right-8 bg-[#f9ca24] p-2 rounded-lg shadow-lg">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 14C19 14 17 16 12 16C7 16 5 14 5 14M12 12C12 12 12 8 12 8C12 8 16 8 16 12M12 12C12 12 12 8 12 8C12 8 8 8 8 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-8 right-8 bg-[#f97316] p-2 rounded-lg shadow-lg">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-24 right-4 bg-black p-3 rounded-xl shadow-lg w-48 h-28">
                  <div className="flex justify-between">
                    <div className="text-xs text-gray-400">Credit Card</div>
                    <div className="flex space-x-1">
                      <div className="h-4 w-4 bg-gray-300 rounded-full opacity-70"></div>
                      <div className="h-4 w-4 bg-gray-300 rounded-full opacity-70"></div>
                    </div>
                  </div>
                  <div className="text-white text-xs mt-8">
                    •••• •••• •••• 1234
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="text-white text-xs">Card Holder</div>
                    <div className="text-white text-xs">08/25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            More than 25,000 teams use Collabs
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img
                src="https://placehold.co/120x40?text=Unsplash"
                alt="Unsplash"
                width={120}
                height={40}
              />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img
                src="https://placehold.co/120x40?text=Notion"
                alt="Notion"
                width={120}
                height={40}
              />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img
                src="https://placehold.co/120x40?text=Intercom"
                alt="Intercom"
                width={120}
                height={40}
              />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img
                src="https://placehold.co/120x40?text=Descript"
                alt="Descript"
                width={120}
                height={40}
              />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img
                src="https://placehold.co/120x40?text=Grammarly"
                alt="Grammarly"
                width={120}
                height={40}
              />
            </div>
          </div>
        </section>

        {/* How we support section */}
        <section className="container mx-auto px-4 py-16 bg-white rounded-3xl my-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How we support our partner all over the world
              </h2>
              <p className="text-gray-600 mb-8">
                SaaS become a common delivery model for many business
                application, including office software, messaging software,
                payroll processing software, DBMS software, management software
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="font-bold">4.9 / 5 rating</div>
                  <div className="text-gray-500">databricks</div>
                </div>

                <div>
                  <div className="flex text-yellow-400 mb-2">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </div>
                  <div className="font-bold">4.8 / 5 rating</div>
                  <div className="text-gray-500">Chainalysis</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-green-100 p-3 rounded-lg">
                  <ChartIcon className="h-6 w-6 text-[#4CAF82]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Publishing</h3>
                  <p className="text-gray-600">
                    Plan, collaborate, and publishing your content that drives
                    meaningful engagement and growth for your brand
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-100 p-3 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-[#4CAF82]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Analytics</h3>
                  <p className="text-gray-600">
                    Analyze your performance and create gorgeous report
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-100 p-3 rounded-lg">
                  <UsersIcon className="h-6 w-6 text-[#4CAF82]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Engagement</h3>
                  <p className="text-gray-600">
                    Quickly navigate you and engage with your audience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 bg-white rounded-3xl my-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="max-w-lg mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Features
                <br />
                you cab get
              </h2>
              <p className="text-gray-600 max-w-md">
                We offer a variety of interesting features that you can help
                increase yor productivity at work and manage your projct esaly
              </p>
            </div>
            <a
              href="/get-started"
              className="bg-[#4CAF82] text-white px-8 py-4 rounded-full hover:bg-[#3d9c6c]"
            >
              Get Started
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Collaboration Teams */}
            <div>
              <div className="bg-[#f8f9fe] p-6 rounded-xl h-64 mb-6 relative overflow-hidden">
                {/* Dashboard UI illustration */}
                <div className="absolute left-4 top-8">
                  <div className="w-12 h-24 bg-[#4CAF82]"></div>
                </div>
                <div className="absolute left-20 top-8 space-y-3 w-48">
                  <div className="h-4 bg-[#e6e9f4] rounded-full"></div>
                  <div className="h-4 bg-[#e6e9f4] rounded-full"></div>
                  <div className="h-4 bg-[#e6e9f4] rounded-full"></div>
                </div>
                <div className="absolute left-4 top-36 space-y-3 w-64">
                  <div className="h-4 bg-[#e6e9f4] rounded-full"></div>
                  <div className="h-4 bg-[#e6e9f4] rounded-full"></div>
                  <div className="h-4 bg-[#e6e9f4] rounded-full"></div>
                </div>
                <div className="absolute left-4 bottom-8 flex space-x-4">
                  <div className="w-12 h-12 bg-[#e6e9f4] rounded-full"></div>
                  <div className="w-12 h-12 bg-[#2196f3] rounded-full"></div>
                  <div className="w-12 h-12 bg-[#4CAF82] rounded-full flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Collboration Teams</h3>
              <p className="text-gray-500">
                Here you can handle projects together with team virtually
              </p>
            </div>

            {/* Cloud Storage */}
            <div>
              <div className="bg-[#f8f9fe] p-6 rounded-xl h-64 mb-6 relative overflow-hidden">
                {/* Document file illustration */}
                <div className="absolute left-1/2 top-12 transform -translate-x-1/2">
                  <div className="w-48 h-24 bg-[#4CAF82] rounded-lg flex flex-col justify-center px-4 relative">
                    <div className="absolute top-4 left-4 bg-yellow-400 p-1 rounded">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path d="M9 7H15" stroke="white" strokeWidth="2" />
                        <path d="M9 12H15" stroke="white" strokeWidth="2" />
                        <path d="M9 17H13" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="text-white font-medium">Document File</div>
                    <div className="text-white text-xs opacity-80">
                      456 GB | 1056 Items
                    </div>
                  </div>
                  <div className="absolute top-6 right-0 bg-[#e6e9f4] w-4 h-4 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-12 bg-[#4CAF82] rounded-full"
                      style={{
                        height: `${Math.random() * 40 + 20}px`,
                        opacity: 0.8,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Storage</h3>
              <p className="text-gray-500">
                No nedd to worry about storage because we provide storage up to
                2 TB
              </p>
            </div>

            {/* Daily Analytics */}
            <div>
              <div className="bg-[#f8f9fe] p-6 rounded-xl h-64 mb-6 relative overflow-hidden">
                {/* Analytics gauge illustration */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative w-32 h-16 overflow-hidden">
                    <div className="absolute inset-0 border-t-[64px] border-t-[#2196f3] border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent rounded-t-full"></div>
                    <div
                      className="absolute inset-0 border-t-[64px] border-t-[#ffeb3b] border-l-transparent border-l-[64px] border-r-[64px] border-r-transparent rounded-t-full"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%, 60% 100%, 60% 50%, 0 50%)",
                      }}
                    ></div>
                    <div className="absolute bottom-0 left-0 text-xs font-bold">
                      60%
                    </div>
                    <div className="absolute bottom-0 right-0 text-xs font-bold">
                      40%
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                      <div className="w-2 h-2 bg-[#2196f3] rounded-full p-1 border-2 border-white"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 space-y-6 w-full px-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#2196f3] p-2 rounded-lg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path
                          d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-[#e6e9f4] rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#4CAF82] p-2 rounded-lg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-[#e6e9f4] rounded-full w-full">
                        <div className="h-full bg-[#4CAF82] rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Daily Analytics</h3>
              <p className="text-gray-500">
                We always provide useful informatin to make it easier for you
                every day
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16 bg-white rounded-3xl my-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                What Benifit Will
                <br />
                You Get
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">
                    Free Consulting With Expert Saving Money
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Online Banking</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Investment Report Every Month</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Saving Money For The Future</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Online Transaction</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#f8f9fe] p-6 rounded-3xl h-80 relative overflow-hidden">
                <img
                  src="https://placehold.co/400x300?text=Laptop+Image"
                  alt="Laptop with banking app"
                  className="object-cover rounded-lg h-full w-full"
                />

                {/* User profile */}
                <div className="absolute top-6 left-6 bg-white p-2 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
                    <img
                      src="https://placehold.co/32x32"
                      alt="Amanda Young"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Amanda Young</div>
                    <div className="text-xs text-gray-500">
                      Professional Banking Advisor
                    </div>
                  </div>
                  <div className="ml-2 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Transaction amount */}
                <div className="absolute top-6 right-6 bg-white p-2 rounded-xl shadow-lg">
                  <div className="text-xs text-gray-500">Amount</div>
                  <div className="font-bold">$415.00</div>
                </div>

                {/* Success message */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <div className="bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-sm">Money Transfer Successful</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16 my-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Plan
              <br />
              That's Right For You
            </h2>
            <p className="text-gray-600">
              Choose plan that works best for you, feel free to contact us
            </p>

            {/* Billing toggle */}
            <div className="flex justify-center mt-8 bg-white inline-flex p-1 rounded-full shadow-sm">
              <button className="px-6 py-2 rounded-full bg-white text-gray-800 font-medium">
                Bill Monthly
              </button>
              <button className="px-6 py-2 rounded-full bg-[#4CAF82] text-white font-medium">
                Bill Yearly
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-3xl relative">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">
                Have a go and test your superpowers
              </p>
              <div className="text-5xl font-bold mb-6">$0</div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">2 Users</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">2 Files</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Public Share & Comments</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Chat Support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">New income apps</p>
                </div>
              </div>

              <button className="w-full border border-[#4CAF82] text-[#4CAF82] py-3 rounded-full hover:bg-gray-50">
                Sign up for free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#4CAF82] p-8 rounded-3xl text-white relative">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-white text-opacity-80 mb-6">
                Experiment the power of infinite possibilities
              </p>
              <div className="text-5xl font-bold mb-6">$8</div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-[#4CAF82]" />
                  </div>
                  <p className="text-white">4 Users</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-[#4CAF82]" />
                  </div>
                  <p className="text-white">All apps</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-[#4CAF82]" />
                  </div>
                  <p className="text-white">Unlimited editable exports</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-[#4CAF82]" />
                  </div>
                  <p className="text-white">Folders and collaboration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-[#4CAF82]" />
                  </div>
                  <p className="text-white">All incoming apps</p>
                </div>
              </div>

              <button className="w-full bg-white text-[#4CAF82] py-3 rounded-full hover:bg-gray-100">
                Go to pro
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-white p-8 rounded-3xl relative">
              <h3 className="text-2xl font-bold mb-2">Business</h3>
              <p className="text-gray-600 mb-6">
                Unveil new superpowers and join the Design League
              </p>
              <div className="text-5xl font-bold mb-6">$16</div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">All the features of pro plan</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Account success Manager</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Single Sign-On (SSO)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Co-conception program</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">Collaboration-Soon</p>
                </div>
              </div>

              <button className="w-full border border-[#4CAF82] text-[#4CAF82] py-3 rounded-full hover:bg-gray-50">
                Go to Business
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Icon Components
function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function StarHalfIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
      <path d="M12 2v15.8" fill="none" stroke="white" strokeWidth="3" />
    </svg>
  );
}

function ChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default App;
