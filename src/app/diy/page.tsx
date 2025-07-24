"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Users, Star, CheckCircle, Calendar } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  cost: string;
  rating: number;
  image: string;
  materials: string[];
  tools: string[];
  steps: string[];
  tips: string[];
}

const DIYProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Raised Garden Bed with Built-in Irrigation',
      description: 'Build a beautiful cedar raised bed with an integrated drip irrigation system for easy watering.',
      category: 'Garden Beds',
      difficulty: 'Intermediate',
      duration: '1 weekend',
      cost: '$150-200',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      materials: [
        '4 cedar boards 2x12x8 feet',
        'Corner brackets (4)',
        'Landscape fabric',
        'Drip irrigation kit',
        'Timer and fittings',
        'Quality garden soil',
        'Gravel for drainage',
      ],
      tools: [
        'Drill with bits',
        'Circular saw',
        'Level',
        'Shovel',
        'Measuring tape',
        'Safety glasses',
      ],
      steps: [
        'Cut boards to desired length (8x4 feet recommended)',
        'Assemble frame using corner brackets',
        'Level the ground and place frame',
        'Add 2-inch layer of gravel for drainage',
        'Install landscape fabric',
        'Set up drip irrigation system',
        'Fill with quality garden soil',
        'Test irrigation system and plant',
      ],
      tips: [
        'Choose untreated cedar for food safety',
        'Install irrigation before adding all soil',
        'Consider accessibility when planning height',
      ],
    },
    {
      id: '2',
      title: 'Self-Watering Container Garden',
      description: 'Create a low-maintenance container garden with built-in water reservoir for consistent moisture.',
      category: 'Containers',
      difficulty: 'Beginner',
      duration: '2-3 hours',
      cost: '$30-50',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=800',
      materials: [
        'Large plastic storage container',
        'Smaller plastic containers (3-4)',
        'Cotton rope or fabric strips',
        'Potting mix',
        'Plants or seeds',
        'Plastic tubing',
        'Drill bits',
      ],
      tools: [
        'Drill',
        'Knife or scissors',
        'Measuring cup',
        'Marker',
      ],
      steps: [
        'Drill holes in bottom of large container for water level indicator',
        'Create water reservoir using smaller containers',
        'Install wicking system with cotton rope',
        'Add potting mix and create planting areas',
        'Install water level indicator tube',
        'Plant your chosen vegetables or herbs',
        'Fill reservoir and test system',
        'Monitor and maintain water levels',
      ],
      tips: [
        'Test wick placement before finalizing setup',
        'Use food-grade containers for edibles',
        'Start with water-loving plants for best results',
      ],
    },
    {
      id: '3',
      title: 'Vertical Herb Garden Wall',
      description: 'Maximize space with a beautiful vertical garden perfect for herbs and small plants.',
      category: 'Vertical Gardens',
      difficulty: 'Intermediate',
      duration: '4-6 hours',
      cost: '$80-120',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/5767/basil-herbs-food-fresh.jpg?auto=compress&cs=tinysrgb&w=800',
      materials: [
        'Cedar fence pickets (6)',
        'Metal plant holders (12)',
        'Screws and washers',
        'Wall mounting brackets',
        'Small pots or planters',
        'Potting soil',
        'Herb plants or seeds',
      ],
      tools: [
        'Drill with bits',
        'Level',
        'Stud finder',
        'Screwdriver',
        'Pencil for marking',
      ],
      steps: [
        'Design layout and mark mounting points on wall',
        'Install wall mounting brackets securely into studs',
        'Attach fence pickets to create vertical frame',
        'Install metal plant holders at desired heights',
        'Test fit pots and adjust as needed',
        'Fill pots with potting soil',
        'Plant herbs and arrange on vertical garden',
        'Water gently and establish care routine',
      ],
      tips: [
        'Choose herbs with similar light requirements',
        'Install drip tray to protect surfaces below',
        'Consider weight when selecting pot materials',
      ],
    },
    {
      id: '4',
      title: 'Compost Bin with Tumbler Design',
      description: 'Build an efficient rotating compost bin that speeds up decomposition and is easy to turn.',
      category: 'Composting',
      difficulty: 'Advanced',
      duration: '1-2 days',
      cost: '$100-150',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      materials: [
        'Large plastic barrel (55 gallon)',
        'Metal rod for axle',
        'Bearings and mounting hardware',
        'Wooden frame lumber',
        'Screen mesh for aeration',
        'Door hinges and latch',
        'Weatherproofing stain',
      ],
      tools: [
        'Drill with various bits',
        'Jigsaw',
        'Wrench set',
        'Measuring tape',
        'Sandpaper',
        'Paintbrush',
      ],
      steps: [
        'Cut access door in barrel and install hinges',
        'Drill aeration holes throughout barrel',
        'Install screen mesh over holes from inside',
        'Create axle system with metal rod and bearings',
        'Build wooden frame to support tumbler',
        'Mount barrel in frame and test rotation',
        'Apply weatherproofing stain to wooden frame',
        'Add initial composting materials and begin rotation schedule',
      ],
      tips: [
        'Balance green and brown materials for best results',
        'Turn every 2-3 days for fastest composting',
        'Keep compost moist but not waterlogged',
      ],
    },
    {
      id: '5',
      title: 'Garden Tool Storage Bench',
      description: 'Combine seating with storage in this attractive garden bench that keeps tools organized.',
      category: 'Storage',
      difficulty: 'Intermediate',
      duration: '6-8 hours',
      cost: '$60-90',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=800',
      materials: [
        'Cedar boards for seat and sides',
        'Plywood for bottom',
        'Piano hinge for lid',
        'Tool holders and hooks',
        'Wood screws',
        'Sandpaper',
        'Wood finish or stain',
      ],
      tools: [
        'Circular saw',
        'Drill',
        'Router (optional)',
        'Clamps',
        'Measuring tape',
        'Safety equipment',
      ],
      steps: [
        'Cut all pieces according to plan dimensions',
        'Sand all pieces smooth',
        'Assemble sides and bottom with screws',
        'Install internal tool organization system',
        'Attach seat with piano hinge',
        'Add safety chain to prevent over-opening',
        'Apply finish or stain for weather protection',
        'Organize tools and test functionality',
      ],
      tips: [
        'Pre-drill holes to prevent splitting',
        'Choose hardware rated for outdoor use',
        'Add felt pads to prevent tool scratching',
      ],
    },
    {
      id: '6',
      title: 'Greenhouse from Recycled Windows',
      description: 'Create an affordable greenhouse using reclaimed windows and basic framing materials.',
      category: 'Structures',
      difficulty: 'Advanced',
      duration: '2-3 weekends',
      cost: '$200-300',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      materials: [
        'Reclaimed windows (8-12)',
        'Pressure-treated lumber for frame',
        'Foundation blocks or gravel',
        'Roofing materials',
        'Door hardware',
        'Ventilation windows',
        'Insulation strip',
      ],
      tools: [
        'Circular saw',
        'Drill',
        'Level',
        'Framing square',
        'Chalk line',
        'Safety equipment',
      ],
      steps: [
        'Design greenhouse to fit available windows',
        'Prepare level foundation with blocks or gravel',
        'Build base frame from pressure-treated lumber',
        'Construct wall frames to fit window dimensions',
        'Install windows in frames with proper sealing',
        'Build and install roof structure',
        'Add door and ventilation systems',
        'Test all systems and add finishing touches',
      ],
      tips: [
        'Check all windows for lead paint before use',
        'Plan for adequate ventilation to prevent overheating',
        'Consider local building codes and permits',
      ],
    },
  ];

  const categories = ['All', 'Garden Beds', 'Containers', 'Vertical Gardens', 'Composting', 'Storage', 'Structures'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
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
            DIY Garden Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create amazing garden features with our step-by-step DIY guides. From raised beds to 
            vertical gardens, discover projects for every skill level and budget.
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
                placeholder="Search projects..."
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

        {/* Project Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                          {project.difficulty}
                        </span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(project.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">
                            {project.rating}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{project.cost}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    {expandedProject === project.id ? 'Hide Details' : 'View Instructions'}
                  </button>
                </div>
              </div>
              
              {/* Expanded Content */}
              {expandedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Materials */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Materials Needed</h4>
                      <ul className="space-y-2">
                        {project.materials.map((material, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tools Required</h4>
                      <ul className="space-y-2">
                        {project.tools.map((tool, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tips */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Pro Tips</h4>
                      <ul className="space-y-2">
                        {project.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <Star className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Steps */}
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Step-by-Step Instructions</h4>
                    <div className="space-y-4">
                      {project.steps.map((step, idx) => (
                        <div key={idx} className="flex space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          </motion.div>
        )}

        {/* Safety Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Safety First!</h3>
          <p className="text-yellow-700">
            Always wear appropriate safety equipment, follow manufacturer instructions for tools, 
            and consider your skill level before starting any project. When in doubt, consult with 
            a professional or experienced DIYer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DIYProjects;