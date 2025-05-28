"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import backgroundLogin from "@/public/assets/background_login.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import SubHeader from "@/components/Header/SubHeader";
import { useAuthStore } from "@/app/store/auth/useAuthStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormValues = {
  email: string;
  password: string;
};

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const ggLogin = useAuthStore((state) => state.ggLogin);
  const isLoading = useAuthStore((state) => state.isLoading);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await login(data.email, data.password);
  };

  const handleLogin = async (credentialResponse: any) => {
    await ggLogin(credentialResponse);
  };

  return (
    <div className="overflow-x-hidden">
      <div
        className={`sticky top-0 z-50 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out
          `}
      >
        <SubHeader />
      </div>

      <div className="container relative flex flex-col items-center justify-center min-h-screen px-4 py-8 mx-auto sm:py-12">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={backgroundLogin.src}
            className="object-cover w-full h-full"
            alt="Background"
          />
        </div>

        <div className="relative z-10 mb-6 text-center sm:mb-8">
          <h3 className="mb-1 text-3xl font-semibold text-gray-900 sm:text-4xl">
            My Account
          </h3>
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <span className="relative after:content-['•'] after:mx-2 after:text-accent">
              Home
            </span>
            <span>My Account</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-md px-6 py-8 overflow-hidden bg-white shadow-lg rounded-xl sm:max-w-lg">
          <h2 className="mb-1 text-xl font-semibold text-center sm:text-2xl">
            Login to EcomGrove
          </h2>
          <p className="mb-5 text-sm text-center text-gray-500 sm:mb-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary hover:underline">
              Create a free account
            </a>
          </p>

          <div className="flex justify-center mb-4 sm:mb-5">
            <GoogleLogin
              onSuccess={handleLogin}
              onError={() => alert("Login failed")}
              text="continue_with"
              shape="rectangular"
              theme="outline"
              size="large"
              width="280"
              context="signin"
            />
          </div>

          <div className="mb-4 text-sm text-center text-gray-400 sm:mb-5">
            or Sign in with Email
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 sm:mb-5">
              <Input
                type="email"
                id="email"
                label="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                className={`${
                  errors.email ? "border-red-400 ring-red-200" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1.5">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-4 sm:mb-5">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  label="Your Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`${
                    errors.password ? "border-red-400 ring-red-200" : ""
                  }`}
                />
                <button
                  type="button"
                  className="absolute text-gray-400 transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs mt-1.5">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between mb-5 text-sm sm:mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded text-primary"
                />
                Remember me
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot Password?
              </a>
            </div>
            <Button
              type="submit"
              variant={"blue"}
              size={"lg"}
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Login"}
            </Button>
          </form>
        </div>
      </div>

      <Toaster />
      <Footer />
    </div>
  );
};

const WrappedLogin = () => (
  <GoogleOAuthProvider clientId={clientId}>
    <Login />
  </GoogleOAuthProvider>
);

export default WrappedLogin;
