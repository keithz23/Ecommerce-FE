"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { useAuthStore } from "@/app/store/auth/useAuthStore";
import Footer from "@/components/Footer/Footer";
import SubHeader from "@/components/Header/SubHeader";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ApiError } from "@/app/types/common/api.error.interface";
import { inputFields } from "@/app/constants/SignupData";
import Image from "next/image";

type FormValues = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
};

export default function Signup() {
  const router = useRouter();
  const { signup, ggLogin, isLoading } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await signup(data);
      toast.success("Signup successful! Please log in.");
      router.push("/login");
    } catch (error: unknown) {
      const err = error as ApiError;
      const message =
        err.response?.data?.message || "Signup failed. Please try again.";
      toast.error(message);
    }
  };

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      await ggLogin(credentialResponse);
      toast.success("Google signup successful!");
      useRouter().push("/dashboard");
    } catch (error: unknown) {
      const err = error as ApiError;
      toast.error("Google signup failed. Please try again.");
      console.error(err.response?.data);
    }
  };

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
  if (!clientId) {
    console.warn(
      "Google Client ID is missing. Please set VITE_GOOGLE_CLIENT_ID in .env"
    );
  }

  return (
    <div className="overflow-x-hidden">
      <div className="sticky top-0 z-50 bg-white transform transition-all duration-300 shadow-lg">
        <SubHeader />
      </div>

      <GoogleOAuthProvider clientId={clientId}>
        <div className="container relative min-h-screen flex flex-col items-center justify-center px-4 py-8 mx-auto sm:py-12">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/assets/background_login.png"
              className="w-full h-full object-cover"
              alt="Background"
              width={1920}
              height={1080}
            />
          </div>

          <div className="text-center mb-6 sm:mb-8 relative z-10">
            <h3 className="text-gray-900 text-3xl font-semibold mb-1 sm:text-4xl">
              My Account
            </h3>
            <div className="flex justify-center items-center text-sm text-soft-gray gap-2">
              <span className="relative after:content-['•'] after:mx-2 after:text-soft-gray">
                Home
              </span>
              <span>Sign Up</span>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl px-6 py-8 w-full max-w-md sm:max-w-lg relative z-10">
            <h2 className="text-center text-xl font-semibold mb-1 sm:text-2xl">
              Sign Up for EcomGrove
            </h2>
            <p className="text-center text-sm text-gray-500 mb-5 sm:mb-6">
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="text-electric-blue hover:underline"
              >
                Sign In
              </Link>
            </p>

            {clientId ? (
              <div className="flex justify-center mb-4 sm:mb-5">
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={() => toast.error("Google signup failed")}
                  text="continue_with"
                  shape="rectangular"
                  theme="outline"
                  size="large"
                  width="280"
                  context="signup"
                />
              </div>
            ) : (
              <p className="text-center text-red-500 mb-4 sm:mb-5">
                Google signup unavailable: Client ID missing
              </p>
            )}

            <div className="text-center text-sm text-gray-400 mb-4 sm:mb-5">
              or Sign up with Email
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {inputFields.map((field) => (
                <div key={field.name} className="mb-4 sm:mb-5">
                  <div className="relative">
                    <Input
                      id={field.name}
                      type={
                        field.name === "password" && showPassword
                          ? "text"
                          : field.type
                      }
                      label={field.label}
                      {...register(field.name, field.validation)}
                      className={`w-full ${
                        errors[field.name] ? "border-red-400 ring-red-200" : ""
                      }`}
                    />
                    {field.name === "password" && (
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOffIcon size={18} />
                        ) : (
                          <EyeIcon size={18} />
                        )}
                      </button>
                    )}
                  </div>
                  {errors[field.name] && (
                    <span className="text-red-500 text-xs mt-1.5">
                      {errors[field.name]?.message}
                    </span>
                  )}
                </div>
              ))}

              <Button
                variant={"blue"}
                size={"lg"}
                className="w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
          </div>
        </div>
        <Toaster />
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
}
