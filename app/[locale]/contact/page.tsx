"use client";

import { FunctionComponent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Services } from "@/shared/enums/Services";
import { ContactFormValues } from "@/shared/forms/ContactFormValues";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContent } from "@/components/ui/toast";
import ErrorMessage from "@/components/ErrorMessage";
import FormSuccessMessage from "@/components/FormSuccessMessage";

type Info = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const info: Info[] = [
  {
    title: "Phone",
    description: "(+48) 889 487 298",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Email",
    description: "krystian.wasilewski@o2.pl",
    icon: <FaEnvelope />,
  },
  {
    title: "Address",
    description: "ul. Piękna 20B, 09-530 Gąbin",
    icon: <FaMapMarkerAlt />,
  },
];

const Contact: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormValues>();
  const recaptcha = useRef<ReCAPTCHA>(null);
  const [isErrorToastOpen, setIsErrorToastOpen] = useState(false);
  const [isReCaptchaError, setIsReCaptchaError] = useState(false);
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    reset();
    recaptcha?.current?.reset();
  };

  const onSubmit = async (data: ContactFormValues) => {
    const captchaValue = recaptcha?.current?.getValue();
    if (captchaValue) {
      setIsReCaptchaError(false);
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          setIsErrorToastOpen(false);
          setIsSuccessMessageOpen(true);
        } else {
          setIsErrorToastOpen(true);
        }
      } catch (error) {
        console.log(error);
        setIsErrorToastOpen(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsReCaptchaError(true);
    }
  };

  const onFormClose = () => {
    resetForm();
    setIsSuccessMessageOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none relative rounded-xl overflow-hidden">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-4xl text-accent">
                Let&apos;s work together!
              </h3>
              <p className="text-white/60">
                I look forward to hearing from you - together, we can create
                something exceptional!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  {...register("firstName", {
                    required: "Firstname is required.",
                  })}
                  type="firstname"
                  placeholder="Firstname"
                  error={errors?.firstName?.message}
                />
                <Input
                  {...register("lastName", {
                    required: "Lastname is required.",
                  })}
                  type="lastname"
                  placeholder="Lastname"
                  error={errors?.lastName?.message}
                />
                <Input
                  {...register("email", { required: "Email is required." })}
                  type="email"
                  placeholder="Email address"
                  error={errors?.email?.message}
                />
                <Input
                  {...register("phone")}
                  type="phone"
                  placeholder="Phone number"
                  error={errors?.phone?.message}
                />
              </div>
              <Select
                {...register("service")}
                onValueChange={(value: Services) => setValue("service", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value={Services.Frontend}>
                      Frontend development
                    </SelectItem>
                    <SelectItem value={Services.Fullstack}>
                      Fullstack development
                    </SelectItem>
                    <SelectItem value={Services.LogoDesign}>
                      Logo Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                {...register("message", { required: "Message is required." })}
                className="h-[200px]"
                placeholder="Type your message here"
                error={errors?.message?.message}
              />
              {/* footer */}
              <div className="flex gap-5 justify-between flex-wrap">
                <div className="relative">
                  <ReCAPTCHA
                    ref={recaptcha}
                    sitekey={process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY!}
                    onChange={(token) => setIsReCaptchaError(!token)}
                  />
                  {isReCaptchaError && (
                    <ErrorMessage message="reCAPTCHA is required." />
                  )}
                </div>
                <Button size="md" className="max-w-40" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </form>
            {isSuccessMessageOpen && (
              <FormSuccessMessage
                title="Email successfully sent!"
                description="I will respond as soon as possible. Thank you."
                onClose={onFormClose}
              />
            )}
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <p className="text-lg md:text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ToastContent
        isOpen={isErrorToastOpen}
        setIsOpen={setIsErrorToastOpen}
        title="Error :("
        description="Sorry, we are doing the best we can. Please try again later."
        type="error"
      />
    </motion.section>
  );
};

export default Contact;
