import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
    configuration;
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send(
        "service_ehzkhus",
        "template_o48zykl",
        {
          to_name: "Muhammad Rashed",
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "apgCcr38-pIj2T2WX"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Message sent faild!", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section className=" bg-[url('contact-me.jpg')] bg-cover bg-center py-12  ">
      <Typography variant="h4" className=" my-12 text-center text-white">
        Contact Me
      </Typography>
      <div className=" w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Column: Contact Form */}
        <div
          className="w-full lg:w-[530px] order-2 lg:order-1"
          data-aos="fade-up"
        >
          <Card
            className=" p-6 min-h-[400px] shadow-md mb-4 md:mb-0 bg-transparent backdrop-blur-sm border-2 "
            data-aos="fade-right"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4" data-aos="fade-up">
                <Input
                  {...register("name", { required: "Name is required" })}
                  label="Name"
                  color="blue"
                  fullWidth
                  className="text-white"
                  size="lg"
                  error={errors.name}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4" data-aos="fade-up">
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  label="Email"
                  color="blue"
                  className="text-white"
                  fullWidth
                  size="lg"
                  error={errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4" data-aos="fade-up">
                <Textarea
                  {...register("message", { required: "Message is required" })}
                  label="Message"
                  color="blue"
                  className="text-white"
                  fullWidth
                  size="lg"
                  rows="4"
                  error={errors.message}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="mt-auto" data-aos="fade-up">
                <Button type="submit" color="blue" fullWidth size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
        {/* Right Column: Contact Information */}
        <div
          className="w-full lg:w-[500px] text-white bg-transparent backdrop-blur-sm p-6 border-2 rounded-2xl min-h-[400px] flex flex-col justify-center order-1 lg:order-2"
          data-aos="fade-left"
        >
          <Typography variant="h5" className="mb-4 text-center md:text-left">
            Get in Touch
          </Typography>

          <div className="flex items-center mb-4" data-aos="fade-up">
            <FaMapMarkerAlt className="text-blue-600 mr-2 text-2xl" />
            <Typography className="text-lg">
              Uttara, Dhaka, Bangladesh
            </Typography>
          </div>

          <div className="flex items-center mb-4" data-aos="fade-up">
            <FaEnvelope className="text-blue-600 mr-2 text-2xl" />
            <Typography className="text-lg">
              <Link to={"mailto:rashedjaman768@gmail.com"} target="_blank">
                rashedjaman768@gmail.com
              </Link>
            </Typography>
          </div>

          <div className="flex items-center mb-4" data-aos="fade-up">
            <FaWhatsapp className="text-green-600 mr-2 text-2xl" />
            <Typography className="text-lg">
              {" "}
              <Link to={"https://wa.me/+8801781131905"} target="_blank">
                Text on Whatsapp
              </Link>
            </Typography>{" "}
          </div>

          <div className="flex items-center mb-4" data-aos="fade-up">
            <FaPhoneAlt className="text-gray-600 mr-2 text-2xl" />
            <Typography className="text-lg">
              <Link to={"tel:+8801781131905"} target="_blank">
                +8801781131905
              </Link>
            </Typography>{" "}
          </div>
          <div className="flex items-center " data-aos="fade-up">
            <FaSkype className="text-blue-600 mr-2 text-2xl" />
            <Typography className="text-lg">
              <Link
                to={"https://join.skype.com/invite/pFc7Qfsys6gD"}
                target="_blank"
              >
                Add to Skype
              </Link>
            </Typography>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
