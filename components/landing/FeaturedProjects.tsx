"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code,
  Zap,
  TrendingUp,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import MockTalkIcon from "@/public/icons/mocktalk.svg";

export function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: "mocktalk",
      title: "MockTalk",
      subtitle: "AI Interview Coach",
      tagline: "Practice interviews so you can focus on landing your dream job",
      description:
        "Practice for your next job interview with our AI-powered platform. Get personalized feedback and improve your interview skills.",
      icon: <MockTalkIcon className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-700",
      bgColor: "bg-blue-50",
      link: "https://mocktalk.dev",
      isLive: true,
      techStack: ["Next.js", "Claude", "Stripe", "TTS/STT"],
      challenge:
        "Creating natural voice interactions that feel like real interviews",
    },
    {
      id: "content-suite",
      title: "Content Automation Suite",
      subtitle: "Marketing Intelligence",
      tagline:
        "Automate content creation so you can focus on strategy that matters",
      description:
        "AI-powered newsletter and social media content generator with automated scheduling and performance optimization.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      techStack: ["Next.js", "LangChain", "Beehiiv API", "Web Scraping"],
      challenge: "Balancing automation with authentic brand voice",
    },
    {
      id: "agritech-forecasting",
      title: "AgriTech Forecasting Platform",
      subtitle: "Predictive Analytics",
      tagline:
        "Predict market trends so farmers can focus on growing, not guessing",
      description:
        "Advanced forecasting system achieving 93% prediction accuracy for agricultural sales, incorporating multi-variable environmental data.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-600 to-emerald-700",
      bgColor: "bg-green-50",
      techStack: [
        "Python",
        "TensorFlow",
        "Time Series Analysis",
        "Weather APIs",
      ],
      challenge:
        "Integrating complex environmental variables into reliable predictions",
    },
    {
      id: "ai-crm",
      title: "AI-Powered CRM",
      subtitle: "Sales Automation",
      tagline:
        "Automate lead qualification so sales teams can focus on closing deals",
      description:
        "End-to-end sales automation from Facebook lead capture to WhatsApp qualification, significantly improving conversion rates.",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      techStack: ["Next.js", "WhatsApp API", "Facebook API", "RAG"],
      challenge:
        "Creating conversational AI that feels human in sales interactions",
    },
    {
      id: "sports-passion",
      title: "Real Madrid Analytics",
      subtitle: "Passion Project",
      tagline: "Analyzing the beautiful game so fans can focus on enjoying it",
      description:
        "Personal project analyzing Real Madrid performance data, player statistics, and match predictions. Because sometimes passion drives the best code.",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-blue-800 to-purple-800",
      bgColor: "bg-blue-50",
      techStack: ["Python", "Data Analysis", "Visualization", "Sports APIs"],
      challenge: "Making sense of football chaos through data",
      isPassion: true,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextProject = () => {
    setIsAutoPlaying(false);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIsAutoPlaying(false);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentProject(index);
  };

  const currentProj = projects[currentProject];

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-0.5 bg-neutral-900 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            Building tools that simplify complexity, so people can focus on what
            truly matters to them.
          </p>
        </motion.div>

        {/* Main Project Display */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Background Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full opacity-30"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-neutral-300 to-neutral-400 rounded-full opacity-20"
              />
            </div>

            {/* Project Cards Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentProj.color} opacity-5`}
                  />

                  <div className="relative p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Left Content */}
                      <div className="space-y-8">
                        {/* Project Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`p-3 rounded-2xl ${
                              currentProj.bgColor
                            } ${
                              currentProj.color.includes("blue")
                                ? "text-blue-700"
                                : currentProj.color.includes("purple")
                                ? "text-purple-700"
                                : currentProj.color.includes("green")
                                ? "text-green-700"
                                : currentProj.color.includes("orange")
                                ? "text-orange-700"
                                : "text-blue-700"
                            }`}
                          >
                            {currentProj.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
                              {currentProj.title}
                            </h3>
                            <p className="text-neutral-600 font-medium">
                              {currentProj.subtitle}
                            </p>
                          </div>
                          {currentProj.isLive && (
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="ml-auto"
                            >
                              <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                LIVE
                              </div>
                            </motion.div>
                          )}
                          {currentProj.isPassion && (
                            <div className="ml-auto px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                              PASSION
                            </div>
                          )}
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-xl font-medium text-neutral-800 italic"
                        >
                          {currentProj.tagline}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-lg text-neutral-700 leading-relaxed"
                        >
                          {currentProj.description}
                        </motion.p>

                        {/* Challenge */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200"
                        >
                          <p className="text-sm font-semibold text-neutral-600 mb-1">
                            The Challenge
                          </p>
                          <p className="text-neutral-700">
                            {currentProj.challenge}
                          </p>
                        </motion.div>

                        {/* Action Button */}
                        {currentProj.link && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <a
                              href={currentProj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 hover:bg-neutral-800 hover:scale-105 active:scale-95"
                            >
                              Visit Live Demo
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </motion.div>
                        )}
                      </div>

                      {/* Right Content - Tech Stack */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                          <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                            Tech Stack
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {currentProj.techStack.map((tech, index) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="px-3 py-2 bg-white rounded-lg text-sm font-medium text-neutral-700 text-center border border-neutral-200 hover:border-neutral-300 transition-colors"
                              >
                                {tech}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Project Visual Placeholder */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          className={`relative h-48 rounded-2xl ${currentProj.bgColor} border border-neutral-200 overflow-hidden`}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${currentProj.color} opacity-10`}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`w-16 h-16 rounded-full bg-gradient-to-br ${currentProj.color} opacity-20`}
                            />
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="h-2 bg-white rounded-full opacity-30 mb-2" />
                            <div className="h-2 bg-white rounded-full opacity-20 w-3/4" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4">
                <button
                  onClick={prevProject}
                  className="p-3  backdrop-blur-sm rounded-full shadow-lg text-neutral-700 hover:text-neutral-900 hover:bg-white transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4">
                <button
                  onClick={nextProject}
                  className="p-3  backdrop-blur-sm rounded-full shadow-lg text-neutral-700 hover:text-neutral-900 hover:bg-white transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Project Dots Navigation */}
            <div className="flex justify-center mt-8 gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "bg-neutral-900 scale-125"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
