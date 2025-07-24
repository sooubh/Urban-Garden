"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'How often should I water my houseplants?',
      answer: 'Watering frequency depends on the plant type, season, and environment. Most houseplants prefer to dry out slightly between waterings. Check the soil by inserting your finger about 1-2 inches deep - if it feels dry, it\'s time to water. Succulents and cacti need less frequent watering (every 1-2 weeks), while tropical plants may need water every few days. During winter, most plants need less water due to slower growth and lower light levels.',
      category: 'Plant Care',
    },
    {
      id: '2',
      question: 'Why are my plant leaves turning yellow?',
      answer: 'Yellow leaves can indicate several issues: overwatering (most common cause), nutrient deficiency, natural aging, pests, or disease. First, check the soil moisture - soggy soil suggests overwatering. If soil drainage is good, consider fertilizing or checking for pests under leaves. Some yellowing of older, lower leaves is normal as plants age.',
      category: 'Plant Problems',
    },
    {
      id: '3',
      question: 'When should I start seeds indoors?',
      answer: 'Start seeds indoors 6-8 weeks before your last expected frost date for warm-season crops like tomatoes, peppers, and eggplants. Cool-season crops like lettuce and broccoli can be started 8-10 weeks before the last frost. Check seed packets for specific timing, and use a seed starting calendar based on your USDA hardiness zone.',
      category: 'Planting',
    },
    {
      id: '4',
      question: 'What\'s the best soil for container gardening?',
      answer: 'Use a high-quality potting mix specifically designed for containers. These mixes are lighter than garden soil and provide better drainage. Look for mixes containing perlite, vermiculite, or coconut coir. Avoid regular garden soil in containers as it\'s too heavy and doesn\'t drain well. For vegetables, choose mixes with added compost or slow-release fertilizer.',
      category: 'Soil & Fertilizer',
    },
    {
      id: '5',
      question: 'How do I know if my plant needs more light?',
      answer: 'Signs of insufficient light include: leggy, stretched growth reaching toward light sources; pale or yellowing leaves; slow growth; few or no flowers on flowering plants; and lower leaves dropping. Most houseplants prefer bright, indirect light. If natural light is limited, consider grow lights placed 6-12 inches above plants.',
      category: 'Plant Care',
    },
    {
      id: '6',
      question: 'What are the white spots on my plant leaves?',
      answer: 'White spots could be powdery mildew (fuzzy white patches), scale insects (small, oval bumps), or mineral deposits from hard water. Powdery mildew needs better air circulation and less humidity. Scale insects require treatment with insecticidal soap or neem oil. Hard water spots can be prevented by using filtered water or rainwater.',
      category: 'Plant Problems',
    },
    {
      id: '7',
      question: 'How do I prepare my garden for winter?',
      answer: 'Clean up debris and diseased plant material, apply 2-4 inches of mulch around perennials, wrap tender shrubs in burlap, drain and store hoses, clean and oil garden tools, plant cover crops in empty beds, and harvest remaining vegetables. Don\'t fertilize trees and shrubs in late fall as this encourages tender growth susceptible to frost damage.',
      category: 'Seasonal Care',
    },
    {
      id: '8',
      question: 'What\'s the difference between fertilizer numbers (N-P-K)?',
      answer: 'N-P-K represents the percentage of Nitrogen-Phosphorus-Potassium in fertilizer. Nitrogen (N) promotes leaf growth and green color. Phosphorus (P) supports root development and flowering. Potassium (K) improves overall plant health and disease resistance. A balanced fertilizer like 10-10-10 contains equal amounts. High-nitrogen fertilizers (like 20-10-10) are good for leafy vegetables, while high-phosphorus fertilizers promote blooming.',
      category: 'Soil & Fertilizer',
    },
    {
      id: '9',
      question: 'How do I get rid of aphids naturally?',
      answer: 'Spray plants with a strong stream of water to dislodge aphids. Apply insecticidal soap or neem oil spray every few days. Introduce beneficial insects like ladybugs or lacewings. Plant companion plants like marigolds, catnip, or garlic nearby. For severe infestations, try a homemade spray of water, dish soap, and a few drops of essential oil.',
      category: 'Pest Control',
    },
    {
      id: '10',
      question: 'Can I grow vegetables indoors?',
      answer: 'Yes! Many vegetables grow well indoors with adequate light. Best options include leafy greens (lettuce, spinach, kale), herbs (basil, parsley, cilantro), cherry tomatoes, peppers, and microgreens. Most need 6-8 hours of bright light daily, so grow lights may be necessary. Use containers with drainage holes and quality potting mix.',
      category: 'Indoor Gardening',
    },
    {
      id: '11',
      question: 'Why aren\'t my tomatoes ripening?',
      answer: 'Tomatoes need warm temperatures (65-75°F) and time to ripen. Cool weather, lack of sunlight, overwatering, or too much nitrogen can delay ripening. Late in the season, harvest green tomatoes and ripen them indoors in a paper bag with a banana or apple. Pinch suckers and remove lower leaves to redirect energy to fruit development.',
      category: 'Plant Problems',
    },
    {
      id: '12',
      question: 'How do I know when to repot my houseplant?',
      answer: 'Repot when roots are growing out of drainage holes, soil dries out very quickly after watering, plant becomes top-heavy and tips over, or growth has slowed significantly. Most houseplants need repotting every 1-3 years. Choose a pot only 1-2 inches larger in diameter and refresh the potting soil completely.',
      category: 'Plant Care',
    },
    {
      id: '13',
      question: 'What is companion planting?',
      answer: 'Companion planting is growing different plants together for mutual benefit. Examples include planting marigolds with tomatoes to repel pests, beans with corn for nitrogen fixation, or basil with peppers for improved flavor and pest control. Some plants also have allelopathic effects, naturally suppressing weeds or harmful insects.',
      category: 'Planting',
    },
    {
      id: '14',
      question: 'How do I improve clay soil?',
      answer: 'Add organic matter like compost, aged manure, or leaf mold annually. These materials improve drainage and soil structure over time. Avoid working clay soil when wet, as this creates compaction. Consider raised beds for immediate improvement. Gypsum can help break up clay particles, and cover crops like clover add organic matter while improving soil structure.',
      category: 'Soil & Fertilizer',
    },
    {
      id: '15',
      question: 'When should I prune my fruit trees?',
      answer: 'Prune fruit trees during dormancy in late winter (February-March in most climates) before buds swell. Remove dead, diseased, or crossing branches first, then thin for air circulation and light penetration. Summer pruning can be done for vigorous trees to control size. Avoid pruning stone fruits (peaches, plums) during wet weather to prevent disease.',
      category: 'Seasonal Care',
    },
  ];

  const categories = ['All', 'Plant Care', 'Plant Problems', 'Planting', 'Soil & Fertilizer', 'Pest Control', 'Indoor Gardening', 'Seasonal Care'];

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common gardening questions. Can't find what you're looking for? 
            Try our AI assistant for personalized help.
          </p>
        </motion.div>

        {/* Search and Filter */}
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
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {expandedItem === item.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              
              {expandedItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-4">No questions found matching your search.</p>
            <p className="text-gray-400">Try adjusting your search terms or browse different categories.</p>
          </motion.div>
        )}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-green-600 text-white rounded-lg p-8 text-center"
        >
          <MessageCircle className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
          <p className="text-green-100 mb-6">
            Can't find the answer you're looking for? Our AI assistant and support team are here to help 
            with personalized advice for your specific gardening situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/assistant"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Ask AI Assistant
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </motion.div>

        {/* Popular Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Topics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Watering Tips',
              'Pest Control',
              'Soil Health',
              'Plant Diseases',
              'Indoor Growing',
              'Seasonal Care',
              'Fertilizing',
              'Pruning Guide'
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;