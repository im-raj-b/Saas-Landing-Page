import React, { useEffect, useState } from "react";

export default function Pricing() {
  const [btnToggle, setBtnToggle] = useState(false);
  const priceClickHandler = (e) => {
    if (e.target.innerText === "Bill Monthly") {
      setBtnToggle(!btnToggle);
    } else {
      setBtnToggle(!btnToggle);
    }
  };
  return (
    <>
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-gradient-to-l from-[#f0fdf4] to-white">
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
            <button
              className={`px-6 py-2 rounded-full bg-[${
                btnToggle ? "#4CAF82" : "#ffffff"
              }] text-gray-800 font-medium`}
              onClick={priceClickHandler}
            >
              Bill Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full bg-[${
                btnToggle ? "#ffffff" : "#4CAF82"
              }] text-gray-800 font-medium`}
              onClick={priceClickHandler}
            >
              Bill Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {btnToggle ? (
            <PlansSection plan="monthly" />
          ) : (
            <PlansSection plan="yearly" />
          )}
        </div>
      </section>
    </>
  );
}

function PlansSection({ plan }) {
  const [planState, setPlan] = useState(false);
  useEffect(() => {
    if (plan === "monthly") {
      setPlan(!planState);
    } else {
      setPlan(!planState);
    }
  }, [plan]);
  return (
    <>
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

        <button className="w-full border border-[#4CAF82] text-green-700 py-3 rounded-full hover:bg-gray-50">
          Sign up for free
        </button>
      </div>

      {/* Pro Plan */}
      <div className="bg-[#4CAF82] p-8 rounded-3xl text-white relative">
        <h3 className="text-2xl font-bold mb-2">Pro</h3>
        <p className="text-white text-opacity-80 mb-6">
          Experiment the power of infinite possibilities
        </p>
        <div className="text-5xl font-bold mb-6">
          {planState ? "$18" : "$80"}
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-white p-1 rounded-full">
              <CheckIcon className="h-4 w-4 text-green-700" />
            </div>
            <p className="text-white">4 Users</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-white p-1 rounded-full">
              <CheckIcon className="h-4 w-4 text-green-700" />
            </div>
            <p className="text-white">All apps</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-white p-1 rounded-full">
              <CheckIcon className="h-4 w-4 text-green-700" />
            </div>
            <p className="text-white">Unlimited editable exports</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-white p-1 rounded-full">
              <CheckIcon className="h-4 w-4 text-green-700" />
            </div>
            <p className="text-white">Folders and collaboration</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-white p-1 rounded-full">
              <CheckIcon className="h-4 w-4 text-green-700" />
            </div>
            <p className="text-white">All incoming apps</p>
          </div>
        </div>

        <button className="w-full bg-white text-green-700 py-3 rounded-full hover:bg-gray-100">
          Go to pro
        </button>
      </div>

      {/* Business Plan */}
      <div className="bg-white p-8 rounded-3xl relative">
        <h3 className="text-2xl font-bold mb-2">Business</h3>
        <p className="text-gray-600 mb-6">
          Unveil new superpowers and join the Design League
        </p>
        <div className="text-5xl font-bold mb-6">
          {planState ? "$26" : "$160"}
        </div>

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

        <button className="w-full border border-[#4CAF82] text-green-700 py-3 rounded-full hover:bg-gray-50">
          Go to Business
        </button>
      </div>
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
