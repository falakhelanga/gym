"use client";
import { Card } from "@/components/elements/card/Card";
import TextInput from "@/components/elements/form-elements/text-input/TextInput";
import { Title } from "@/components/elements/Title/Title";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { registrationSchema } from "./schema";
import { Button } from "@/components/elements/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WelcomeRegistration = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (data: any) => {
    const api_data: { first_name: string; last_name: string; company?: any } = {
      first_name: data.firstName,
      last_name: data.lastName,
    };
    if (data.company) {
      api_data.company = { name: data.company };
    }
    setLoading(true);
    try {
      const res = await fetch("/complete-registration/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(api_data),
      });

      if (res.ok) {
        const data = await res.json();
        router.push("/welcome");
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="flex w-full md:px-16 h-full">
      <div className="flex-1 flex flex-col justify-center items-center">
        <Image
          width={300}
          height={300}
          alt="an astronaut"
          src="/images/outer-space.jpg"
        />
        <Title size="lg" className=" semi-bold mb-2">
          Start your 30-day trial
        </Title>
        <ul className=" list-inside font-semibold text-sm text-gray-600">
          <li>- Access to the Studio Plan</li>
          <li>- Automation add-on included</li>
          <li>- Train up to 50 clients</li>
          <li>- No credit card required</li>
        </ul>
      </div>
      <div className="bg-gray-300 w-[1px] h-full mx-6"></div>

      {/* FORM */}
      <div className="flex-1 flex items-center flex-col w-full  justify-center">
        <Title
          size="sm"
          className="text-light-blue font-semibold text-center text-xs "
        >
          Welcome to Virtual Fitness
        </Title>
        <Title size="lg" className="text-center mb-6">
          Just a few more details
        </Title>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col gap-y-3 w-full">
            <TextInput
              label="First Name"
              type="text"
              {...register("firstName")}
              error={errors.firstName?.message}
            />
            <TextInput
              label="Last Name"
              type="text"
              error={errors.lastName?.message}
              {...register("lastName")}
            />

            <TextInput
              label="Company Name (optional)"
              type="text"
              error={errors.company?.message}
              {...register("company")}
            />
          </div>
          <Button loading={loading} className="mt-8">
            <span>Stary Training</span>{" "}
            <FontAwesomeIcon className="text-white" icon={faArrowRight} />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default WelcomeRegistration;
