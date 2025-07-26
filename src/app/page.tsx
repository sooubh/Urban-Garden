"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Bot,
  Camera,
  BookOpen,
  Lightbulb,
  Hammer,
  Image as ImageIcon,
  PenTool,
  MessageCircle,
  HelpCircle,
  Mail,
  Info,
} from "lucide-react";
import Image from "next/image";

const Home = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Assistant",
      description:
        "Get personalized gardening advice from our intelligent assistant powered by advanced AI.",
      link: "/assistant",
      color: "bg-blue-500",
    },
    {
      icon: Camera,
      title: "Plant Scanner",
      description:
        "Upload photos to identify plants, diagnose diseases, and get care recommendations.",
      link: "/scanner",
      color: "bg-green-500",
    },
    {
      icon: BookOpen,
      title: "Plant Encyclopedia",
      description:
        "Explore our comprehensive database of plants with detailed care instructions.",
      link: "/encyclopedia",
      color: "bg-purple-500",
    },
    {
      icon: Lightbulb,
      title: "Tips & Guides",
      description:
        "Learn seasonal tips, plant care basics, and advanced gardening techniques.",
      link: "/tips",
      color: "bg-yellow-500",
    },
    {
      icon: Hammer,
      title: "DIY Projects",
      description:
        "Step-by-step tutorials for garden beds, planters, and creative garden solutions.",
      link: "/diy",
      color: "bg-orange-500",
    },
    {
      icon: PenTool,
      title: "Garden Blog",
      description:
        "Read the latest articles, success stories, and expert insights from our community.",
      link: "/blog",
      color: "bg-indigo-500",
    },
    {
      icon: ImageIcon,
      title: "Garden Gallery",
      description:
        "Browse beautiful garden photos and get inspired by community submissions.",
      link: "/gallery",
      color: "bg-pink-500",
    },
    {
      icon: Info,
      title: "About Us",
      description:
        "Learn about our mission to make gardening accessible and enjoyable for everyone.",
      link: "/about",
      color: "bg-teal-500",
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description:
        "Find quick answers to common gardening questions and troubleshooting tips.",
      link: "/faq",
      color: "bg-red-500",
    },
    {
      icon: Mail,
      title: "Contact",
      description:
        "Get in touch with our team for support, suggestions, or collaboration opportunities.",
      link: "/contact",
      color: "bg-gray-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Plant Image */}
      <section className="relative bg-white text-green-900 py-20 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Growing <br /> Beautiful Plants <br /> at Home
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform any urban space into a thriving garden with
                personalized AI guidance, plant identification, and a supportive
                community of fellow gardeners.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Shop Now
                </button>
                <button className="flex items-center text-green-600 hover:underline">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4.5 3.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v13a.5.5 0 01-.8.4L10 13.5l-4.7 3.4a.5.5 0 01-.8-.4v-13z" />
                  </svg>
                  Watch Video
                </button>
              </div>
              <div className="flex gap-8 text-gray-600 font-semibold">
                <div>
                  <span className="text-green-600 text-xl">2000+</span>
                  <br />
                  Delivery
                </div>
                <div>
                  <span className="text-green-600 text-xl">1200+</span>
                  <br />
                  Customers
                </div>
                <div>
                  <span className="text-green-600 text-xl">1000+</span>
                  <br />
                  Products
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
              alt="Hero Plant"
              className="w-[300px] h-auto object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      {/* Plant Gallery Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-12 text-center">
            Featured Plants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Monstera Deliciosa",
                image:
                  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
                fact: "Famous for its split leaves and air-purifying qualities.",
              },
              {
                name: "Snake Plant",
                image:
                  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
                fact: "Thrives on neglect and improves indoor air quality.",
              },
              {
                name: "Fiddle Leaf Fig",
                image:
                  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
                fact: "A trendy houseplant with large, violin-shaped leaves.",
              },
              {
                name: "Aloe Vera",
                image:
                  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
                fact: "Known for its soothing gel and easy care.",
              },
            ].map((plant, i) => (
              <motion.div
                key={plant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 text-center"
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-24 h-24 mx-auto mb-4 object-contain rounded-lg"
                />
                <p className="text-green-700 text-sm font-semibold mb-1">
                  {plant.fact}
                </p>
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  {plant.name}
                </h3>
                <button className="text-green-600 hover:underline font-medium">
                  Shop Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a suite of tools and resources designed to help you
              become a better gardener, whether you're a beginner or a seasoned
              pro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.link}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 group"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto text-white text-3xl ${feature.color}`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <span className="inline-block text-green-600 font-medium group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Grow Your Garden?
            </h2>
            <p className="text-xl mb-8">
              Join our community and unlock the full potential of your home
              garden with AI-powered tools and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
