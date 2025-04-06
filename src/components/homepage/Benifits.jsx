import React from "react";
import laptop from "../../assets/laptop.png";
import configuration from "../../Configurations.json";

export default function Benifits() {
  return (
    <>
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-gradient-to-tl from-[#f0fdf4] to-white">
        <div className="px-8">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                What Benifit Will
                <br />
                You Get
              </h2>
              <div className="space-y-4">
                {configuration.benefits.list.map((text, index) => (
                  <div className="flex items-start gap-3" key={index}>
                    <div className="mt-1 bg-[#4CAF82] p-1 rounded-full">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                <div className="overflow-hidden relative aspect-[3/4]">
                  <img
                    loading="lazy"
                    src={laptop}
                    alt="Laptop with banking app"
                    className="object-cover rounded-lg h-full w-full"
                  />
                </div>

                {/* User profile */}
                <div className="absolute top-6 -left-20 bg-white p-2 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
                    <img
                      loading="lazy"
                      src={laptop}
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
                <div className="absolute top-20 -right-16 bg-white p-2 rounded-xl shadow-lg">
                  <div className="text-xs text-gray-500">Total income</div>
                  <div className="font-bold">$415.00</div>
                </div>

                {/* Success message */}
                <div className="absolute bottom-2 left-15 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <div className="bg-[#4CAF82] p-1 rounded-full">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-sm">Money Transfer Successful</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
