"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

// Types
interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  pathPosition: number; // Position along the path (0-1)
}

// Timeline data with calculated path positions that correspond to the actual curve
const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2018",
    title: "First Lines of Code",
    description:
      "Started coding at 15 with a Python casino game. Lost the code, but found my passion.",
    pathPosition: 0,
  },
  {
    id: 2,
    year: "2020",
    title: "University Begins",
    description:
      "Started Computer Engineering at Universidad Politécnica de Madrid.",
    pathPosition: 0.15,
  },
  {
    id: 3,
    year: "2023",
    title: "First Startup",
    description:
      "Took the leap into entrepreneurship. The path was becoming clearer, but still full of unknowns.",
    pathPosition: 0.4,
  },
  {
    id: 4,
    year: "2024",
    title: "Forbes Recognition & Building Impact",
    description:
      "Forbes 30 Under 30 - a validation that following my own timeline was the right choice. Hippocrates AI, Hazlo Sports, and other ventures. Each project teaching me something new.",
    pathPosition: 0.5,
  },
  {
    id: 5,
    year: "2025",
    title: "My Own Path",
    description:
      "MockTalk, AI CRM, freelance projects. Following my own timeline, knowing everyone's journey is unique.",
    pathPosition: 0.6,
  },
];

export function JourneyTimeline() {
  const [currentMilestone, setCurrentMilestone] = useState<number | null>(null);
  const [pathProgress, setPathProgress] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const timelineSection = document.getElementById("timeline-section");

      if (timelineSection) {
        const sectionTop = timelineSection.offsetTop;
        const sectionHeight = timelineSection.offsetHeight;

        // Use the same calculation as AboutMe component
        const scrollProgress =
          (scrollPosition - sectionTop + windowHeight) /
          (sectionHeight + windowHeight);

        // Clamp between 0 and 1
        const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

        setPathProgress(clampedProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to get point on curved path - matches the actual SVG path
  const getPathPoint = (t: number) => {
    // This function calculates points along the exact quadratic bezier curve in the SVG
    // Path: M200 50 Q150 100 200 150 Q250 200 200 250 Q150 300 200 350 Q250 400 200 450

    // Divide the path into segments (we have 4 quadratic curves)
    const segmentLength = 0.25;
    const segmentIndex = Math.floor(t / segmentLength);
    const localT = (t % segmentLength) / segmentLength;

    // Define the control points for each quadratic curve segment
    const curves = [
      {
        start: { x: 200, y: 50 },
        control: { x: 150, y: 100 },
        end: { x: 200, y: 150 },
      },
      {
        start: { x: 200, y: 150 },
        control: { x: 250, y: 200 },
        end: { x: 200, y: 250 },
      },
      {
        start: { x: 200, y: 250 },
        control: { x: 150, y: 300 },
        end: { x: 200, y: 350 },
      },
      {
        start: { x: 200, y: 350 },
        control: { x: 250, y: 400 },
        end: { x: 200, y: 450 },
      },
    ];

    const curve = curves[Math.min(segmentIndex, 3)];

    // Quadratic bezier formula: B(t) = (1-t)²P₀ + 2(1-t)tP₁ + t²P₂
    const x =
      Math.pow(1 - localT, 2) * curve.start.x +
      2 * (1 - localT) * localT * curve.control.x +
      Math.pow(localT, 2) * curve.end.x;

    const y =
      Math.pow(1 - localT, 2) * curve.start.y +
      2 * (1 - localT) * localT * curve.control.y +
      Math.pow(localT, 2) * curve.end.y;

    return { x, y };
  };

  return (
    <>
      <div id="timeline-section" className="relative">
        {/* Spacer to create scroll distance */}
        <div className="h-[300vh]">
          {/* Sticky Container */}
          <div className="sticky top-0 h-screen overflow-hidden">
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-6xl mx-auto px-6 w-full">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
                    My Journey
                  </h2>
                  <div className="w-24 h-0.5 bg-neutral-900 mx-auto mb-6"></div>
                  <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
                    Every path is unique. This is mine—from curiosity to
                    creation, trusting the journey even when the destination
                    wasn&apos;t clear.
                  </p>

                  {/* Interactive hint */}
                  <div className="flex items-center justify-center gap-2 mt-6 text-sm text-neutral-500">
                    <MapPin className="w-4 h-4" />
                    <span>Click or hover on the milestones to explore</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </motion.div>

                {/* Timeline Visual */}
                <div className="relative flex items-center justify-center min-h-[500px]">
                  {/* SVG Path */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="400"
                      height="500"
                      viewBox="0 0 400 500"
                      className="w-full max-w-md"
                    >
                      {/* Background dotted path */}
                      <path
                        d="M200 50 Q150 100 200 150 Q250 200 200 250 Q150 300 200 350 Q250 400 200 450"
                        stroke="rgba(156, 163, 175, 0.3)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                      />

                      {/* Animated continuous path */}
                      <motion.path
                        d="M200 50 Q150 100 200 150 Q250 200 200 250 Q150 300 200 350 Q250 400 200 450"
                        stroke="#374151"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        pathLength="1"
                        strokeDasharray="1"
                        strokeDashoffset={1 - pathProgress}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Milestone dots positioned on the actual path */}
                      {timelineData.map((milestone, index) => {
                        const isVisible =
                          pathProgress >= milestone.pathPosition;
                        const point = getPathPoint(milestone.pathPosition);
                        const isHovered = hoveredMilestone === index;
                        const isSelected = currentMilestone === index;

                        return (
                          <g key={milestone.id}>
                            {/* Milestone dot with pulse animation when visible */}
                            {isVisible && (
                              <>
                                {/* Pulse ring for interactivity hint */}
                                <motion.circle
                                  cx={point.x}
                                  cy={point.y}
                                  r="12"
                                  fill="none"
                                  stroke="#6b7280"
                                  strokeWidth="1"
                                  opacity={isHovered ? 0.6 : 0.3}
                                  initial={{ scale: 0 }}
                                  animate={{
                                    scale: isHovered ? [1, 1.2, 1] : 1,
                                  }}
                                  transition={{
                                    duration: isHovered ? 1.5 : 0.3,
                                    repeat: isHovered ? Infinity : 0,
                                  }}
                                />

                                {/* Main dot */}
                                <motion.circle
                                  cx={point.x}
                                  cy={point.y}
                                  r={isSelected ? "8" : isHovered ? "7" : "6"}
                                  fill={
                                    isSelected
                                      ? "#1f2937"
                                      : isHovered
                                      ? "#374151"
                                      : "#6b7280"
                                  }
                                  stroke="#ffffff"
                                  strokeWidth="3"
                                  className="cursor-pointer transition-all duration-200"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                  }}
                                  onMouseEnter={() =>
                                    setHoveredMilestone(index)
                                  }
                                  onMouseLeave={() => setHoveredMilestone(null)}
                                  onClick={() =>
                                    setCurrentMilestone(
                                      currentMilestone === index ? null : index
                                    )
                                  }
                                />

                                {/* Year label positioned smartly to avoid overlap */}
                                <motion.text
                                  x={point.x + (index % 2 === 0 ? 25 : -25)}
                                  y={point.y + 5}
                                  className="text-xs font-semibold fill-gray-700 cursor-pointer select-none"
                                  textAnchor={index % 2 === 0 ? "start" : "end"}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: index * 0.1 + 0.2,
                                  }}
                                  onMouseEnter={() =>
                                    setHoveredMilestone(index)
                                  }
                                  onMouseLeave={() => setHoveredMilestone(null)}
                                  onClick={() =>
                                    setCurrentMilestone(
                                      currentMilestone === index ? null : index
                                    )
                                  }
                                >
                                  {milestone.year}
                                </motion.text>
                              </>
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* Milestone Details - appears on hover/click */}
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 max-w-sm z-10">
                    {(currentMilestone !== null ||
                      hoveredMilestone !== null) && (
                      <motion.div
                        key={currentMilestone ?? hoveredMilestone}
                        initial={{ opacity: 0, x: -30, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -30, scale: 0.95 }}
                        transition={{
                          duration: 0.4,
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100"
                      >
                        {(() => {
                          const milestone =
                            timelineData[currentMilestone ?? hoveredMilestone!];
                          return (
                            <>
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold">
                                  {(currentMilestone ?? hoveredMilestone!) + 1}
                                </div>
                                <div className="text-sm font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                  {milestone.year}
                                </div>
                              </div>

                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {milestone.title}
                              </h3>

                              <p className="text-gray-600 leading-relaxed">
                                {milestone.description}
                              </p>

                              {currentMilestone !== null && (
                                <button
                                  onClick={() => setCurrentMilestone(null)}
                                  className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors underline"
                                >
                                  Close details
                                </button>
                              )}
                            </>
                          );
                        })()}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center pt-16"
        >
          <div className="relative inline-block max-w-2xl">
            <div className="absolute -top-6 -left-6 text-6xl text-neutral-200 font-serif leading-none">
              &quot;
            </div>
            <p className="text-2xl md:text-3xl font-light text-neutral-800 italic relative z-10 px-8">
              Everyone&apos;s path is unique. Trust yours, even when others
              don&apos;t understand it.
            </p>
            <div className="absolute -bottom-6 -right-6 text-6xl text-neutral-200 font-serif rotate-180 leading-none">
              &quot;
            </div>
          </div>
          <div className="mt-6 text-sm text-neutral-500 font-medium">
            — Diego Garcia
          </div>
        </motion.div>
      </div>
    </>
  );
}
