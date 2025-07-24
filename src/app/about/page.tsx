"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Target, Users, Award, Heart, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We promote eco-friendly gardening practices that benefit both your garden and the environment.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of gardeners who share knowledge and inspiration.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Leveraging cutting-edge AI technology to make gardening more accessible and successful.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for gardening drives everything we do, from content creation to tool development.',
    },
  ];

  const team = [
    {
      name: 'Sarah Green',
      role: 'Founder & Master Gardener',
      bio: '20+ years of gardening experience with expertise in sustainable practices and plant biology.',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Dr. Alex Chen',
      role: 'AI Research Lead',
      bio: 'PhD in Computer Science specializing in machine learning applications for agriculture and botany.',
      image: 'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Content Specialist',
      bio: 'Horticultural expert with a passion for educating others about plant care and garden design.',
      image: 'https://images.pexels.com/photos/3831750/pexels-photo-3831750.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About GardenAI
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We're passionate about making gardening accessible, enjoyable, and successful for everyone 
              through the power of artificial intelligence and community knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At GardenAI, we believe that everyone deserves to experience the joy and satisfaction of growing their own plants. 
                Our mission is to democratize gardening knowledge by combining traditional expertise with cutting-edge AI technology.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're a complete beginner or an experienced gardener, our platform provides personalized guidance, 
                plant identification tools, and a supportive community to help you create the garden of your dreams.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Impact</h3>
                  <p className="text-gray-600">Helping gardeners worldwide grow sustainably</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful garden"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Best Gardening App 2024</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our commitment to the gardening community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of gardening experts, AI specialists, and passionate plant lovers work together 
              to bring you the best gardening experience possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                GardenAI was born from a simple observation: gardening should be accessible to everyone, regardless of experience level. 
                Our founder, Sarah Green, noticed that many people were intimidated by gardening or struggled with plant care despite their enthusiasm.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Combining her decades of gardening expertise with the latest advances in artificial intelligence, Sarah assembled a team 
                of passionate experts to create a platform that could provide personalized, intelligent guidance to gardeners worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Today, GardenAI serves thousands of gardeners, from urban apartment dwellers with their first houseplant to seasoned 
                growers managing large outdoor gardens. We're proud to be part of each gardener's journey toward green success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;