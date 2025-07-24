"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Droplet, Sun, Thermometer, Ruler, Clock } from 'lucide-react';

interface Plant {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  description: string;
  care: {
    light: string;
    water: string;
    temperature: string;
    humidity: string;
    fertilizer: string;
  };
  characteristics: {
    height: string;
    spread: string;
    bloomTime: string;
    foliage: string;
  };
  tips: string[];
}

const Encyclopedia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const plants: Plant[] = [
    {
      id: '1',
      name: 'Monstera Deliciosa',
      scientificName: 'Monstera deliciosa',
      category: 'Houseplants',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/6208091/pexels-photo-6208091.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The Swiss Cheese Plant is beloved for its dramatic, split leaves and easy care requirements. Native to tropical rainforests, it thrives in bright, indirect light.',
      care: {
        light: 'Bright, indirect light',
        water: 'Water when top inch of soil is dry',
        temperature: '65-80°F (18-27°C)',
        humidity: '40-60%',
        fertilizer: 'Monthly during growing season',
      },
      characteristics: {
        height: '6-10 feet indoors',
        spread: '3-6 feet',
        bloomTime: 'Rarely blooms indoors',
        foliage: 'Large, split leaves',
      },
      tips: [
        'Provide a moss pole for support',
        'Wipe leaves weekly to maintain shine',
        'Rotate regularly for even growth',
      ],
    },
    {
      id: '2',
      name: 'Snake Plant',
      scientificName: 'Sansevieria trifasciata',
      category: 'Houseplants',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/7457078/pexels-photo-7457078.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Known for its upright, sword-like leaves with yellow edges, the Snake Plant is virtually indestructible and excellent for beginners.',
      care: {
        light: 'Low to bright, indirect light',
        water: 'Water every 2-3 weeks, allow soil to dry completely',
        temperature: '60-80°F (15-27°C)',
        humidity: '30-50%',
        fertilizer: 'Rarely needed, light feeding in spring',
      },
      characteristics: {
        height: '2-4 feet',
        spread: '1-2 feet',
        bloomTime: 'Occasionally produces fragrant white flowers',
        foliage: 'Thick, upright, variegated',
      },
      tips: [
        'Perfect for low-light areas',
        'Drought tolerant once established',
        'Propagates easily from leaf cuttings',
      ],
    },
    {
      id: '3',
      name: 'Fiddle Leaf Fig',
      scientificName: 'Ficus lyrata',
      category: 'Houseplants',
      difficulty: 'Hard',
      image: 'https://images.pexels.com/photos/6208070/pexels-photo-6208070.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'With its large, violin-shaped leaves, the Fiddle Leaf Fig is a stunning statement plant that requires consistent care and proper placement.',
      care: {
        light: 'Bright, indirect light',
        water: 'Water when top 2 inches of soil are dry',
        temperature: '65-75°F (18-24°C)',
        humidity: '50-60%',
        fertilizer: 'Monthly during spring and summer',
      },
      characteristics: {
        height: '6-10 feet indoors',
        spread: '2-4 feet',
        bloomTime: 'Does not bloom indoors',
        foliage: 'Large, glossy, fiddle-shaped',
      },
      tips: [
        'Avoid moving once established',
        'Clean leaves regularly for best appearance',
        'Watch for brown spots indicating overwatering',
      ],
    },
    {
      id: '4',
      name: 'Tomato',
      scientificName: 'Solanum lycopersicum',
      category: 'Vegetables',
      difficulty: 'Medium',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'One of the most popular garden vegetables, tomatoes come in many varieties and provide fresh, flavorful fruit all season long.',
      care: {
        light: 'Full sun (6-8 hours daily)',
        water: 'Deep, consistent watering',
        temperature: '60-85°F (15-29°C)',
        humidity: '40-70%',
        fertilizer: 'Regular feeding every 2-3 weeks',
      },
      characteristics: {
        height: '2-8 feet depending on variety',
        spread: '2-3 feet',
        bloomTime: 'Continuous flowering in season',
        foliage: 'Compound leaves, strong aroma',
      },
      tips: [
        'Stake or cage for support',
        'Consistent watering prevents cracking',
        'Remove suckers for better fruit production',
      ],
    },
    {
      id: '5',
      name: 'Lavender',
      scientificName: 'Lavandula angustifolia',
      category: 'Herbs',
      difficulty: 'Medium',
      image: 'https://images.pexels.com/photos/2123669/pexels-photo-2123669.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aromatic herb with purple flower spikes, lavender is prized for its fragrance, culinary uses, and ability to attract beneficial insects.',
      care: {
        light: 'Full sun',
        water: 'Low water needs, drought tolerant',
        temperature: '60-80°F (15-27°C)',
        humidity: '30-50%',
        fertilizer: 'Light feeding, avoid over-fertilizing',
      },
      characteristics: {
        height: '1-3 feet',
        spread: '2-3 feet',
        bloomTime: 'Mid to late summer',
        foliage: 'Gray-green, needle-like',
      },
      tips: [
        'Prune after flowering to maintain shape',
        'Excellent for dried flower arrangements',
        'Plant in well-draining soil',
      ],
    },
    {
      id: '6',
      name: 'Basil',
      scientificName: 'Ocimum basilicum',
      category: 'Herbs',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/5767/basil-herbs-food-fresh.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Essential culinary herb with aromatic leaves, basil is easy to grow and provides fresh flavor for cooking throughout the growing season.',
      care: {
        light: 'Full sun to partial shade',
        water: 'Regular watering, keep soil moist',
        temperature: '70-85°F (21-29°C)',
        humidity: '40-60%',
        fertilizer: 'Light feeding every 3-4 weeks',
      },
      characteristics: {
        height: '1-2 feet',
        spread: '1-1.5 feet',
        bloomTime: 'Summer, pinch flowers for leaf production',
        foliage: 'Bright green, aromatic',
      },
      tips: [
        'Pinch flowers to encourage leaf growth',
        'Harvest regularly for best flavor',
        'Grows well in containers',
      ],
    },
    {
      id: '7',
      name: 'Sunflower',
      scientificName: 'Helianthus annuus',
      category: 'Flowers',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/36478/amazing-beautiful-beautifull-bloom.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cheerful annual flowers that can grow very tall, sunflowers are easy to grow and provide seeds for birds and humans alike.',
      care: {
        light: 'Full sun',
        water: 'Regular watering, especially when young',
        temperature: '70-85°F (21-29°C)',
        humidity: '40-60%',
        fertilizer: 'Moderate feeding during growing season',
      },
      characteristics: {
        height: '3-15 feet depending on variety',
        spread: '1-3 feet',
        bloomTime: 'Late summer to fall',
        foliage: 'Large, heart-shaped leaves',
      },
      tips: [
        'Plant after soil warms in spring',
        'Tall varieties need wind protection',
        'Save seeds for next year or bird feed',
      ],
    },
    {
      id: '8',
      name: 'Peace Lily',
      scientificName: 'Spathiphyllum wallisii',
      category: 'Houseplants',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant houseplant with glossy green leaves and white flower bracts, known for its air-purifying qualities and tolerance of lower light.',
      care: {
        light: 'Low to medium, indirect light',
        water: 'Keep soil consistently moist',
        temperature: '65-80°F (18-27°C)',
        humidity: '40-60%',
        fertilizer: 'Monthly during growing season',
      },
      characteristics: {
        height: '1-3 feet',
        spread: '1-2 feet',
        bloomTime: 'Spring and fall',
        foliage: 'Dark green, glossy',
      },
      tips: [
        'Wilting indicates need for water',
        'Remove spent flowers at base',
        'Excellent air purifier',
      ],
    },
  ];

  const categories = ['All', 'Houseplants', 'Vegetables', 'Herbs', 'Flowers'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredPlants = plants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || plant.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
            Plant Encyclopedia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive plant database with detailed care instructions, growing tips, 
            and everything you need to know about your favorite plants.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Plant Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPlants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {plant.name}
                      </h3>
                      <p className="text-sm text-gray-500 italic mb-2">
                        {plant.scientificName}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {plant.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(plant.difficulty)}`}>
                          {plant.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {plant.description}
                  </p>
                  
                  {/* Care Requirements */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Sun className="h-4 w-4 text-yellow-600" />
                      <span className="text-gray-700">{plant.care.light}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Droplet className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{plant.care.water}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Thermometer className="h-4 w-4 text-red-600" />
                      <span className="text-gray-700">{plant.care.temperature}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Ruler className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700">{plant.characteristics.height}</span>
                    </div>
                  </div>
                  
                  {/* Tips */}
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick Tips:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {plant.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No plants found matching your criteria.</p>
          </motion.div>
        )}

        {/* Care Symbols Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-green-50 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Care Symbols Guide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Sun className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Light</h4>
              <p className="text-sm text-gray-600">Sunlight requirements</p>
            </div>
            <div className="text-center">
              <Droplet className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Water</h4>
              <p className="text-sm text-gray-600">Watering frequency</p>
            </div>
            <div className="text-center">
              <Thermometer className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Temperature</h4>
              <p className="text-sm text-gray-600">Ideal temperature range</p>
            </div>
            <div className="text-center">
              <Ruler className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Size</h4>
              <p className="text-sm text-gray-600">Mature plant height</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Encyclopedia;