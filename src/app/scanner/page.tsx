"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, Loader, CheckCircle, AlertCircle, Leaf, Droplet, Sun, Thermometer } from 'lucide-react';

interface AnalysisResult {
  plantName: string;
  confidence: number;
  health: 'healthy' | 'stressed' | 'diseased';
  careInstructions: {
    watering: string;
    light: string;
    temperature: string;
    humidity: string;
    fertilizer: string;
  };
  commonIssues: string[];
  tips: string[];
}

const PlantScanner = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setAnalysisResult(null);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setAnalysisResult(null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const simulateAnalysis = (): AnalysisResult => {
    const plants = [
      'Monstera Deliciosa',
      'Snake Plant (Sansevieria)',
      'Pothos',
      'Peace Lily',
      'Rubber Plant',
      'Spider Plant',
      'Fiddle Leaf Fig',
      'ZZ Plant',
    ];
    
    const healthStates: Array<'healthy' | 'stressed' | 'diseased'> = ['healthy', 'stressed', 'diseased'];
    const selectedPlant = plants[Math.floor(Math.random() * plants.length)];
    const health = healthStates[Math.floor(Math.random() * healthStates.length)];
    
    return {
      plantName: selectedPlant,
      confidence: Math.floor(Math.random() * 20) + 80,
      health,
      careInstructions: {
        watering: health === 'stressed' ? 'Water when top inch of soil is dry. Currently may be overwatered.' : 'Water when top inch of soil is dry, typically every 1-2 weeks.',
        light: 'Bright, indirect light. Avoid direct sunlight which can scorch leaves.',
        temperature: '65-75°F (18-24°C) is ideal. Avoid cold drafts.',
        humidity: '40-60% humidity. Use a humidifier or pebble tray if air is dry.',
        fertilizer: 'Feed monthly during growing season (spring/summer) with balanced liquid fertilizer.',
      },
      commonIssues: [
        'Yellow leaves from overwatering',
        'Brown leaf tips from low humidity',
        'Stunted growth from insufficient light',
        'Root rot from poor drainage',
      ],
      tips: [
        'Rotate plant weekly for even growth',
        'Wipe leaves with damp cloth monthly',
        'Check for pests regularly',
        'Repot every 2-3 years or when rootbound',
      ],
    };
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      const result = simulateAnalysis();
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 3000);
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'stressed': return 'text-yellow-600 bg-yellow-100';
      case 'diseased': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getHealthIcon = (health: string) => {
    switch (health) {
      case 'healthy': return CheckCircle;
      case 'stressed': return AlertCircle;
      case 'diseased': return AlertCircle;
      default: return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Plant & Soil Scanner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload a photo of your plant, leaf, or soil to get instant AI-powered identification, 
            health analysis, and personalized care recommendations.
          </p>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors"
          >
            {previewUrl ? (
              <div className="space-y-4">
                <img
                  src={previewUrl}
                  alt="Plant preview"
                  className="max-h-64 mx-auto rounded-lg shadow-md"
                />
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Choose Different Image
                  </button>
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader className="h-4 w-4 animate-spin" />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Camera className="h-4 w-4" />
                        <span>Analyze Plant</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="h-16 w-16 text-gray-400 mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Upload Plant Image
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Drag and drop an image here, or click to select a file
                  </p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Choose File
                  </button>
                </div>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </motion.div>

        {/* Analysis Results */}
        {analysisResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 space-y-8"
          >
            {/* Plant Identification */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
                <div className="text-sm text-gray-600">
                  Confidence: {analysisResult.confidence}%
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Leaf className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {analysisResult.plantName}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    {(() => {
                      const HealthIcon = getHealthIcon(analysisResult.health);
                      return (
                        <>
                          <HealthIcon className="h-4 w-4" />
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthColor(analysisResult.health)}`}>
                            {analysisResult.health.charAt(0).toUpperCase() + analysisResult.health.slice(1)}
                          </span>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Care Instructions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Droplet className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Watering</h4>
                    <p className="text-gray-600 text-sm">{analysisResult.careInstructions.watering}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sun className="h-5 w-5 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Light</h4>
                    <p className="text-gray-600 text-sm">{analysisResult.careInstructions.light}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Thermometer className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Temperature</h4>
                    <p className="text-gray-600 text-sm">{analysisResult.careInstructions.temperature}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Droplet className="h-5 w-5 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Humidity</h4>
                    <p className="text-gray-600 text-sm">{analysisResult.careInstructions.humidity}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Fertilizer</h4>
                <p className="text-gray-600 text-sm">{analysisResult.careInstructions.fertilizer}</p>
              </div>
            </div>

            {/* Common Issues */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Watch Out For</h3>
              <ul className="space-y-2">
                {analysisResult.commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-700">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pro Tips</h3>
              <ul className="space-y-2">
                {analysisResult.tips.map((tip, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <Camera className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Instant Identification</h3>
            <p className="text-gray-600 text-sm">
              Advanced AI recognizes thousands of plant species with high accuracy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <CheckCircle className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Health Analysis</h3>
            <p className="text-gray-600 text-sm">
              Detect plant stress, diseases, and get recommendations for treatment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <Leaf className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Personalized Care</h3>
            <p className="text-gray-600 text-sm">
              Get customized care instructions based on your plant's specific needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlantScanner;