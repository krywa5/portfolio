"use client";

import { FunctionComponent } from "react";
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
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
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
              <Select {...register("service")}>
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
              {/* Button */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
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
                    <p className="text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

enum Services {
  Frontend = "frontend",
  Fullstack = "fullstack",
  LogoDesign = "logo-design",
}

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: Services;
  message: string;
};

export default Contact;
