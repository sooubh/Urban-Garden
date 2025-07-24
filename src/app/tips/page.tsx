"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Droplet, Sun, Thermometer, Leaf, Bug, Scissors } from 'lucide-react';

interface Tip {
  id: string;
  title: string;
  description: string;
  category: string;
  season: string;
  icon: React.ComponentType<any>;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  details: string;
}

const Tips = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('All');

  const tips: Tip[] = [
    {
      id: '1',
      title: 'Check Soil Moisture Before Watering',
      description: 'Insert your finger 1-2 inches into the soil. If it feels dry, it\'s time to water.',
      category: 'Watering',
      season: 'All Year',
      icon: Droplet,
      difficulty: 'Beginner',
      details: 'Overwatering is one of the most common plant killers. Different plants have different water needs, but the finger test is universally reliable. For succulents, wait until soil is completely dry. For tropical plants, water when the top inch is dry.'
    },
    {
      id: '2',
      title: 'Rotate Plants Weekly for Even Growth',
      description: 'Turn your indoor plants a quarter turn each week to ensure all sides receive equal light.',
      category: 'Light',
      season: 'All Year',
      icon: Sun,
      difficulty: 'Beginner',
      details: 'Plants naturally grow toward light sources, which can cause uneven, lopsided growth. Regular rotation ensures balanced development and prevents plants from leaning toward windows.'
    },
    {
      id: '3',
      title: 'Start Seeds Indoors 6-8 Weeks Before Last Frost',
      description: 'Get a head start on the growing season by starting warm-season crops indoors.',
      category: 'Planting',
      season: 'Spring',
      icon: Calendar,
      difficulty: 'Intermediate',
      details: 'Tomatoes, peppers, and eggplants benefit from early indoor sowing. Use seed starting mix, provide bottom heat (70-75°F), and ensure adequate light with grow lights or sunny windows.'
    },
    {
      id: '4',
      title: 'Mulch Around Plants in Summer',
      description: 'Apply 2-3 inches of organic mulch to retain moisture and regulate soil temperature.',
      category: 'Soil Care',
      season: 'Summer',
      icon: Thermometer,
      difficulty: 'Beginner',
      details: 'Mulching reduces water evaporation by up to 50%, suppresses weeds, and moderates soil temperature. Use organic materials like wood chips, straw, or shredded leaves.'
    },
    {
      id: '5',
      title: 'Deadhead Flowers Regularly',
      description: 'Remove spent blooms to encourage continued flowering and plant energy allocation.',
      category: 'Maintenance',
      season: 'Spring',
      icon: Scissors,
      difficulty: 'Beginner',
      details: 'Deadheading redirects plant energy from seed production back to flower and foliage growth. Cut just above the first set of healthy leaves or next flower bud.'
    },
    {
      id: '6',
      title: 'Check for Pests Weekly',
      description: 'Early detection of pest problems makes treatment much more effective and less harmful.',
      category: 'Pest Control',
      season: 'All Year',
      icon: Bug,
      difficulty: 'Intermediate',
      details: 'Inspect the undersides of leaves, new growth, and soil surface. Look for holes, discoloration, sticky honeydew, or actual insects. Common pests include aphids, spider mites, and scale insects.'
    },
    {
      id: '7',
      title: 'Prepare Garden Beds in Fall',
      description: 'Add compost and cover crops to improve soil structure over winter.',
      category: 'Soil Care',
      season: 'Fall',
      icon: Leaf,
      difficulty: 'Intermediate',
      details: 'Fall preparation allows organic matter to decompose over winter, creating rich, fertile soil for spring planting. Plant cover crops like crimson clover or winter rye to prevent erosion.'
    },
    {
      id: '8',
      title: 'Water Deeply but Less Frequently',
      description: 'Deep watering encourages strong root development and drought tolerance.',
      category: 'Watering',
      season: 'Summer',
      icon: Droplet,
      difficulty: 'Beginner',
      details: 'Shallow, frequent watering creates shallow root systems. Instead, water thoroughly until you see runoff, then wait until soil begins to dry before watering again.'
    },
    {
      id: '9',
      title: 'Protect Plants from Winter Damage',
      description: 'Use row covers, mulch, and proper pruning to help plants survive cold weather.',
      category: 'Protection',
      season: 'Winter',
      icon: Thermometer,
      difficulty: 'Advanced',
      details: 'Wrap tender shrubs in burlap, apply extra mulch around perennials, and avoid late-season fertilizing which can encourage tender growth susceptible to frost damage.'
    },
    {
      id: '10',
      title: 'Clean Tools Between Plants',
      description: 'Prevent disease spread by disinfecting pruning tools with rubbing alcohol.',
      category: 'Maintenance',
      season: 'All Year',
      icon: Scissors,
      difficulty: 'Beginner',
      details: 'Disease pathogens can easily spread through contaminated tools. Clean blades with 70% isopropyl alcohol between plants, especially when working with diseased material.'
    }
  ];

  const categories = ['All', 'Watering', 'Light', 'Planting', 'Soil Care', 'Maintenance', 'Pest Control', 'Protection'];
  const seasons = ['All', 'Spring', 'Summer', 'Fall', 'Winter', 'All Year'];

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    const matchesSeason = selectedSeason === 'All' || tip.season === selectedSeason;
    return matchesSearch && matchesCategory && matchesSeason;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
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
            Gardening Tips & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover expert tips, seasonal advice, and practical guides to help your garden thrive. 
            From beginner basics to advanced techniques, we've got you covered.
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
                placeholder="Search tips..."
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Season</label>
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                >
                  {seasons.map(season => (
                    <option key={season} value={season}>{season}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {tip.category}
                      </span>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">{tip.season}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tip.difficulty)}`}>
                          {tip.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {tip.description}
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {tip.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredTips.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No tips found matching your criteria.</p>
          </motion.div>
        )}

        {/* Seasonal Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Seasonal Gardening Calendar</h2>
            <p className="text-green-100 mb-6">
              Stay on track with our month-by-month gardening guide tailored to your growing zone.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { season: 'Spring', tasks: 'Start seeds, prepare beds, plant cool crops' },
                { season: 'Summer', tasks: 'Water deeply, harvest, pest control' },
                { season: 'Fall', tasks: 'Plant cover crops, preserve harvest' },
                { season: 'Winter', tasks: 'Plan next year, maintain tools, protect plants' }
              ].map((item, index) => (
                <div key={item.season} className="text-center">
                  <h3 className="font-semibold mb-2">{item.season}</h3>
                  <p className="text-sm text-green-100">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tips;