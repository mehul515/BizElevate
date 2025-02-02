"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  message: string;
  image: string;
  rating: number;
  country: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Founder at DigitalTech",
    message:
      "This product has completely transformed our workflow. The ease of integration and the intuitive design have allowed our team to be more productive than ever. We’ve significantly reduced manual tasks and improved our overall efficiency.",
    image: "/profile.avif",
    rating: 5,
    country: "USA",
  },
  {
    name: "Jane Smith",
    role: "Operations Lead at Innovate",
    message:
      "From day one, this solution has helped us optimize our processes and streamline communication across teams. The customer support team is outstanding—they’ve always been quick to respond and provide helpful solutions.",
    image: "/profile.avif",
    rating: 5,
    country: "UK",
  },
  {
    name: "Alice Johnson",
    role: "Head of Sales at SalesPro",
    message:
      "I can’t recommend this enough! The platform is incredibly easy to use, and it’s already had a huge impact on our sales performance. Our team is closing deals faster, and the reporting tools make tracking progress a breeze.",
    image: "/profile.avif",
    rating: 5,
    country: "Canada",
  },
  {
    name: "Bob Brown",
    role: "Product Manager at DevSol",
    message:
      "This tool has been an absolute game-changer for our team. It’s made collaborating across departments seamless and has significantly improved our project timelines.",
    image: "/profile.avif",
    rating: 5,
    country: "Australia",
  },
];

const TestimonialSection = () => {
  const [expandedTestimonialIndex, setExpandedTestimonialIndex] = useState<number>(0);

  const handleCardClick = (index: number) => {
    setExpandedTestimonialIndex(index);
  };

  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 15.27l4.18 2.19-1.64-5.36L18 6.91l-5.47-.45L10 1 7.47 6.46 2 6.91l4.46 4.19-1.64 5.36L10 15.27z"
          clipRule="evenodd"
        />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-12 px-4 md:py-20 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Customers Are Saying
        </motion.h2>

        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-[700px] mx-auto">
          Hear from our customers about their experience and how our services have helped them achieve their goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="cursor-pointer flex items-center gap-4 transition duration-300"
              onClick={() => handleCardClick(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex flex-col text-left">
                <div className="font-semibold text-gray-300">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.role}</div>
                <div className="flex items-center mb-1 mt-2">
                  {renderRating(testimonial.rating)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Detailed Testimonial Section */}
        <motion.div
          className="bg-gray-900 border border-gray-700 p-4 sm:p-6 rounded-xl shadow-xl max-w-md sm:max-w-2xl mx-auto mt-10"
          key={expandedTestimonialIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6 gap-4">
            <img
              src={testimonials[expandedTestimonialIndex].image}
              alt={testimonials[expandedTestimonialIndex].name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl text-gray-200 font-semibold">{testimonials[expandedTestimonialIndex].name}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{testimonials[expandedTestimonialIndex].role}</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-400 text-left">
            {testimonials[expandedTestimonialIndex].message}
          </p>
          <div className="flex items-center mt-3">
            {renderRating(testimonials[expandedTestimonialIndex].rating)}
            <div className="text-gray-300 border-l-2 border-gray-300 px-2 ml-2 text-sm sm:text-base">
              {testimonials[expandedTestimonialIndex].rating}.0
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;