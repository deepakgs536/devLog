import React, { useState } from "react";
import DownArrowIcon from "@/assets/downArrowIcon";
import { Input, Textarea, Button } from "@heroui/react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const { name, email, phone, subject, message } = formData;

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=deepakgs536@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Hi, I'm ${name}.\n\n${message}\n\nContact Info:\nEmail: ${email}\nPhone: ${phone}`
  )}`;

  window.open(gmailURL, "_blank");
  setFormData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
};

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 pb-10 md:pb-20 pb-4 gap-10 
    text-white font-josefin">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Let’s Work <span className="text-[#e3302e]">Together</span>
        </h2>
        <p className="text-sm md:text-md text-white">
          Ready to bring your ideas to life? Get in touch, and let’s discuss how I can help you achieve your goals.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            size="sm"
            isRequired
            variant="flat"
            label="Full Name"
            classNames={{
              base: "shadow-customRed",
              inputWrapper: "rounded-none",
              input: "text-gray-500",
              label: "text-gray-500"
            }}
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            size="sm"
            isRequired
            variant="flat"
            label="Email"
            classNames={{
              base: "shadow-customRed",
              inputWrapper: "rounded-none",
              input: "text-gray-500",
              label: "text-gray-500"
            }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Input
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            size="sm"
            variant="flat"
            label="Phone"
            classNames={{
              base: "shadow-customRed",
              inputWrapper: "rounded-none",
              input: "text-gray-500",
              label: "text-gray-500"
            }}
          />
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            size="sm"
            variant="flat"
            label="Subject"
            classNames={{
              base: "shadow-customRed",
              inputWrapper: "rounded-none",
              input: "text-gray-500",
              label: "text-gray-500"
            }}
          />
        </div>

        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          size="sm"
          variant="flat"
          label="Message"
          minRows={5}
          classNames={{
            base: "shadow-customRed",
            inputWrapper: "rounded-none",
            input: "text-gray-500",
            label: "text-gray-500"
          }}
        />

        <Button
          type="submit"
          className="bg-[#e22f36] rounded-none text-[13px] md:text-[14px] text-white px-4 md:px-6 py-2 mt-2.5 hover:opacity-90"
          endContent={<DownArrowIcon className="-rotate-[90deg]" color="#fff" height={20} />}
        >
          LET’S TALK
        </Button>
      </form>
    </div>
  );
};
