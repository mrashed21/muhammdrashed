// ContactMe.jsx
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import React, { useEffect } from "react";

import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import emailjs from "emailjs-com";

import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS with configuration
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_ehzkhus", // replace with your EmailJS service ID
        "template_o1mgkul", // replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "apgCcr38-pIj2T2WX" // replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS:", response);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div
      className="flex flex-col md:flex-row max-w-5xl mx-auto p-6"
      data-aos="fade-up"
    >
      {/* Left Column: Contact Form */}
      <Card className="flex-1 p-6 shadow-md mb-4 md:mb-0" data-aos="fade-right">
        <Typography variant="h4" className="mb-4 text-center">
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Input
              {...register("name", { required: "Name is required" })}
              label="Name"
              color="blue"
              fullWidth
              size="lg"
              error={errors.name}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              label="Email"
              color="blue"
              fullWidth
              size="lg"
              error={errors.email}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <Textarea
              {...register("message", { required: "Message is required" })}
              label="Message"
              color="blue"
              fullWidth
              size="lg"
              rows="4"
              error={errors.message}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" color="blue" fullWidth size="lg">
            Send Message
          </Button>
        </form>
      </Card>

      {/* Right Column: Contact Information */}
      <div
        className="flex-1 ml-0 md:ml-6 flex flex-col justify-center items-start"
        data-aos="fade-left"
      >
        <Typography variant="h5" className="mb-4 text-center md:text-left">
          Get in Touch
        </Typography>

        <div className="flex items-center mb-4" data-aos="fade-up">
          <FaMapMarkerAlt className="text-blue-600 mr-2" />
          <Typography className="text-lg">Dhaka, Bangladesh</Typography>
        </div>

        <div className="flex items-center mb-4" data-aos="fade-up">
          <FaEnvelope className="text-blue-600 mr-2" />
          <Typography className="text-lg">rashedjaman768@gmail.com</Typography>
        </div>

        <div className="flex items-center mb-4" data-aos="fade-up">
          <FaWhatsapp className="text-green-600 mr-2" />
          <Typography className="text-lg">+8801XXXXXXXXX</Typography>{" "}
          {/* Replace with your WhatsApp number */}
        </div>

        <div className="flex items-center" data-aos="fade-up">
          <FaPhoneAlt className="text-gray-600 mr-2" />
          <Typography className="text-lg">+8801XXXXXXXXX</Typography>{" "}
          {/* Replace with your phone number */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
