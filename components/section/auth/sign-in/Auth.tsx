"use client";
import { Card } from "@/components/elements/card/Card";
import TextInput from "../../../elements/form-elements/text-input/TextInput";
import React from "react";
import { Heading } from "@/components/elements/Heading/Heading";
import Image from "next/image";
import { Button } from "@/components/elements/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import Link from "next/link";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resolve } from "path";
import { loginSchema } from "./Schema";
import { ErrorBlock } from "@/components/elements/error-block/ErrorBlock";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

type AuthProps = {
  isLogin?: boolean;
};

const Auth = ({ isLogin = true }: AuthProps) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [apiErrors, setApiErrors] = React.useState<string[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const authUrl = isLogin ? "/auth/sign-in/api" : "/auth/sign-up/api";
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch(authUrl, {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const data = await res.json();
        router.push("/dashboard/clients");
      }
      const errorData = await res.json();
      if (errorData.error) {
        const errorsArray = Object.values(errorData.error);
        setApiErrors(errorsArray as string[]);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex justify-center items-center w-full h-screen"
    >
      <div className="md:w-[60%] w-full">
        <Card className="px-6 max-sm:h-screen overflow-auto max-sm:flex flex-col justify-center">
          <Heading className="text-center mb-3" size="sm">
            {isLogin && "Log in to Fitnest"}
            {!isLogin && "Sign up for Fitnest"}
          </Heading>
          {apiErrors && (
            <ErrorBlock className="flex flex-col">
              {apiErrors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </ErrorBlock>
          )}

          <button
            style={{
              boxShadow: "0 0px 3px rgba(0,0,0,0.1)",
            }}
            className="bg-white flex justify-center gap-x-1 items-center py-2 rounded w-full text-sm font-semibold text-gray-600 mt-6"
          >
            <Image
              src="/images/google.svg"
              width={25}
              height={25}
              alt="google logo"
            />
            <span>{isLogin ? "Login with Google" : "Sign up with Google"}</span>
          </button>
          <div>
            <div className="flex items-center justify-center gap-x-3 mt-6 mb-6">
              <div className="border-b md:w-1/4 w-[10%] border-gray-300"></div>
              <span className="text-gray-400 text-xs">
                {isLogin ? "OR LOGIN WITH E-MAIL" : "OR SIGN UP WITH E-MAIL"}
              </span>
              <div className="border-b md:w-1/4 w-[10%] border-gray-300"></div>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <TextInput
              label="Email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <TextInput
              label="Password"
              type="password"
              error={errors.password?.message}
              {...register("password")}
            />
            {!isLogin && (
              <TextInput
                label="Confirm Password"
                type="password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            )}
          </div>

          {isLogin && (
            <div className="flex justify-between items-center mt-4">
              <label htmlFor="remember" className="flex items-center gap-x-1">
                <input id="remember" name="remember" type="checkbox" />
                <span className="text-sm md:cursor-pointer">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500">
                Forgot password?
              </a>
            </div>
          )}

          <div className="mt-4">
            <Button loading={loading} className="uppercase">
              <span>{isLogin ? "LOG IN" : "Sign up for free"}</span>{" "}
              <FontAwesomeIcon className="text-white" icon={faArrowRight} />
            </Button>
          </div>
          {isLogin ? (
            <div className="flex justify-center items-center mt-8">
              <span className="text-sm">Don&apos;t have an account?</span>
              <Link href="/auth/sign-up" className="text-blue-500 text-sm ml-1">
                Sign up
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-8">
              <span className="text-sm">Already have an account?</span>
              <Link href="/auth/sign-in" className="text-blue-500 text-sm ml-1">
                Log in
              </Link>
            </div>
          )}
        </Card>
      </div>
    </form>
  );
};

export default Auth;
