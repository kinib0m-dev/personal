"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Code, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 px-4 py-2 text-sm shadow-sm rounded-2xl"
            >
              <div className="w-2 h-2 bg-slate-600 rounded-full mr-2" />
              Forbes 30 Under 30 • Building the Future
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div className="space-y-4 mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-neutral-900"
            >
              Turning Ideas into{" "}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-6xl md:text-8xl xl:text-9xl font-black bg-gradient-to-r from-slate-800 via-neutral-700 to-slate-900 bg-clip-text text-transparent">
                Reality
              </span>
            </motion.div>
          </motion.div>

          {/* Subtitle with roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-lg text-neutral-600"
          >
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-slate-700" />
              <span className="font-medium">AI Engineer</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-neutral-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-slate-700" />
              <span className="font-medium">CTO</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-neutral-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-slate-700" />
              <span className="font-medium">Entrepreneur</span>
            </div>
          </motion.div>

          {/* Summary Stats */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-neutral-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Building scalable AI solutions that matter—from diagnostic tools
            improving hospital efficiency across 4 countries to agritech systems
            achieving 93% prediction accuracy. Transforming complex challenges
            into elegant realities through thoughtful engineering and strategic
            vision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group inline-flex items-center gap-2 bg-neutral-900 text-neutral-100 px-4 py-2 rounded-2xl font-medium tracking-tight transition-all duration-200 hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98]">
              Explore My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button className="group inline-flex items-center gap-2 text-neutral-700 font-medium tracking-tight transition-all duration-200 hover:text-neutral-900 border-b border-transparent hover:border-neutral-300 pb-1">
              <Brain className="w-4 h-4 transition-transform group-hover:scale-110" />
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
