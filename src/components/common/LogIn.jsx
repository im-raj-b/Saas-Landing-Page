import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#e8f5f0] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link
              to="/"
              className="text-3xl font-bold text-[#4CAF82] inline-block mb-2"
            >
              Biccas
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTab === "login" ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-gray-600 mt-2">
              {activeTab === "login"
                ? "Enter your credentials to access your account"
                : "Fill in the form to start your journey with us"}
            </p>
          </div>

          {/* Auth Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-8">
              <button
                className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "login"
                    ? "bg-[#4CAF82] text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "signup"
                    ? "bg-[#4CAF82] text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            {activeTab === "login" && (
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF82] focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF82] focus:border-transparent outline-none transition"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    ></button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-[#4CAF82] focus:ring-[#4CAF82] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="/forgot-password"
                    className="text-sm text-[#4CAF82] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4CAF82] text-white py-3 rounded-lg hover:bg-[#3d9c6c] transition-colors"
                >
                  Login
                </button>

                <div className="relative flex items-center justify-center mt-6">
                  <div className="border-t border-gray-300 absolute w-full"></div>
                  <div className="bg-white px-4 relative z-10 text-sm text-gray-500">
                    Or continue with
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span>Github</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span>Twitter</span>
                  </button>
                </div>
              </form>
            )}

            {/* Signup Form */}
            {activeTab === "signup" && (
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF82] focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF82] focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="signup-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="signup-email"
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF82] focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="signup-password"
                      placeholder="Create a password"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF82] focus:border-transparent outline-none transition"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    ></button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Password must be at least 8 characters long
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirm-password"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF82] focus:border-transparent outline-none transition"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    ></button>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 mt-1 text-[#4CAF82] focus:ring-[#4CAF82] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a href="/terms" className="text-[#4CAF82] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="text-[#4CAF82] hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4CAF82] text-white py-3 rounded-lg hover:bg-[#3d9c6c] transition-colors"
                >
                  Create Account
                </button>

                <div className="relative flex items-center justify-center mt-6">
                  <div className="border-t border-gray-300 absolute w-full"></div>
                  <div className="bg-white px-4 relative z-10 text-sm text-gray-500">
                    Or sign up with
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span>Github</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span>Twitter</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Bottom text */}
          <p className="text-center mt-6 text-sm text-gray-600">
            {activeTab === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  className="text-[#4CAF82] hover:underline font-medium"
                  onClick={() => setActiveTab("signup")}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-[#4CAF82] hover:underline font-medium"
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 py-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Biccas Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthPage;
