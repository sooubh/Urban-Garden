"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Heart, Share2, MapPin, Camera, Calendar } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  photographer: string;
  date: string;
  likes: number;
  image: string;
  tags: string[];
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: '1',
      title: 'Urban Rooftop Vegetable Garden',
      description: 'A thriving rooftop garden in downtown with raised beds full of fresh vegetables and herbs.',
      category: 'Vegetable Gardens',
      location: 'New York, NY',
      photographer: 'Sarah Green',
      date: '2025-01-08',
      likes: 142,
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['urban gardening', 'rooftop', 'vegetables', 'raised beds'],
    },
    {
      id: '2',
      title: 'English Cottage Garden in Spring',
      description: 'A romantic cottage garden bursting with colorful flowers, climbing roses, and meandering pathways.',
      category: 'Flower Gardens',
      location: 'Cotswolds, UK',
      photographer: 'Maria Rodriguez',
      date: '2025-01-05',
      likes: 238,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['cottage garden', 'roses', 'spring', 'pathways'],
    },
    {
      id: '3',
      title: 'Modern Succulent Wall Display',
      description: 'Innovative vertical garden featuring various succulent species in a geometric wooden frame.',
      category: 'Indoor Gardens',
      location: 'Los Angeles, CA',
      photographer: 'Alex Chen',
      date: '2025-01-03',
      likes: 89,
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['succulents', 'vertical garden', 'modern', 'indoor'],
    },
    {
      id: '4',
      title: 'Japanese Zen Garden with Koi Pond',
      description: 'Peaceful Japanese-inspired garden with carefully placed stones, bamboo, and a serene koi pond.',
      category: 'Landscape Design',
      location: 'Portland, OR',
      photographer: 'Sarah Green',
      date: '2025-01-01',
      likes: 195,
      image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['zen garden', 'japanese', 'koi pond', 'peaceful'],
    },
    {
      id: '5',
      title: 'Herb Spiral in Permaculture Garden',
      description: 'Beautiful herb spiral design creating multiple microclimates for various culinary herbs.',
      category: 'Herb Gardens',
      location: 'Austin, TX',
      photographer: 'Maria Rodriguez',
      date: '2024-12-28',
      likes: 156,
      image: 'https://images.pexels.com/photos/5767/basil-herbs-food-fresh.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['herbs', 'permaculture', 'spiral design', 'culinary'],
    },
    {
      id: '6',
      title: 'Greenhouse Paradise',
      description: 'Stunning greenhouse filled with tropical plants, orchids, and a diverse collection of exotic species.',
      category: 'Greenhouses',
      location: 'Vancouver, BC',
      photographer: 'Alex Chen',
      date: '2024-12-25',
      likes: 267,
      image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['greenhouse', 'tropical', 'orchids', 'exotic'],
    },
    {
      id: '7',
      title: 'Drought-Resistant Desert Garden',
      description: 'Beautiful xeriscape design featuring native desert plants, cacti, and water-wise landscaping.',
      category: 'Landscape Design',
      location: 'Phoenix, AZ',
      photographer: 'Sarah Green',
      date: '2024-12-22',
      likes: 134,
      image: 'https://images.pexels.com/photos/1298694/pexels-photo-1298694.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['desert', 'xeriscape', 'drought resistant', 'native plants'],
    },
    {
      id: '8',
      title: 'Window Sill Herb Collection',
      description: 'Charming collection of herbs growing on a sunny kitchen windowsill in vintage containers.',
      category: 'Indoor Gardens',
      location: 'Chicago, IL',
      photographer: 'Maria Rodriguez',
      date: '2024-12-20',
      likes: 98,
      image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['windowsill', 'herbs', 'kitchen', 'containers'],
    },
    {
      id: '9',
      title: 'Community Garden Harvest Day',
      description: 'Vibrant community garden during harvest season with families gathering fresh produce.',
      category: 'Community Gardens',
      location: 'Seattle, WA',
      photographer: 'Alex Chen',
      date: '2024-12-18',
      likes: 178,
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['community', 'harvest', 'vegetables', 'families'],
    },
    {
      id: '10',
      title: 'Butterfly Garden in Full Bloom',
      description: 'Pollinator-friendly garden designed to attract butterflies with native wildflowers and milkweed.',
      category: 'Wildlife Gardens',
      location: 'Madison, WI',
      photographer: 'Sarah Green',
      date: '2024-12-15',
      likes: 221,
      image: 'https://images.pexels.com/photos/36478/amazing-beautiful-beautifull-bloom.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['butterflies', 'pollinators', 'wildflowers', 'native'],
    },
    {
      id: '11',
      title: 'Vertical Hydroponic Tower',
      description: 'Innovative hydroponic tower system growing lettuce and leafy greens in a small space.',
      category: 'Hydroponic Gardens',
      location: 'San Francisco, CA',
      photographer: 'Alex Chen',
      date: '2024-12-12',
      likes: 167,
      image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['hydroponics', 'vertical', 'lettuce', 'space saving'],
    },
    {
      id: '12',
      title: 'Raised Bed Companion Planting',
      description: 'Well-organized raised beds demonstrating companion planting principles with tomatoes, basil, and marigolds.',
      category: 'Vegetable Gardens',
      location: 'Denver, CO',
      photographer: 'Maria Rodriguez',
      date: '2024-12-10',
      likes: 143,
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['companion planting', 'raised beds', 'tomatoes', 'organization'],
    },
  ];

  const categories = [
    'All',
    'Vegetable Gardens',
    'Flower Gardens',
    'Indoor Gardens',
    'Herb Gardens',
    'Landscape Design',
    'Greenhouses',
    'Community Gardens',
    'Wildlife Gardens',
    'Hydroponic Gardens',
  ];

  const filteredImages = images.filter(image => 
    selectedCategory === 'All' || image.category === selectedCategory
  );

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Garden Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover inspiring gardens from around the world. Browse beautiful photos submitted by our 
            community of passionate gardeners and get ideas for your own green space.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
                  <Camera className="h-4 w-4 text-gray-600" />
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {image.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {image.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{image.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{image.likes}</span>
                    </div>
                    <Share2 className="h-3 w-3 cursor-pointer hover:text-gray-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 text-gray-800 rounded-full p-2 hover:bg-white transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedImage.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Category:</span>
                    <p className="text-gray-600">{selectedImage.category}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Location:</span>
                    <p className="text-gray-600">{selectedImage.location}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Photographer:</span>
                    <p className="text-gray-600">{selectedImage.photographer}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Date:</span>
                    <p className="text-gray-600">
                      {new Date(selectedImage.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="font-medium text-gray-900 mb-2 block">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Heart className="h-5 w-5" />
                      <span>{selectedImage.likes} likes</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Upload CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-green-600 text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Share Your Garden</h3>
          <p className="text-green-100 mb-6">
            Have a beautiful garden to share? We'd love to feature your photos in our gallery!
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Submit Your Photos
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;