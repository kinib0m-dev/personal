"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Heart, Globe, Coffee } from "lucide-react";

export function AboutMe() {
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = [
    {
      number: "01",
      icon: <Code className="w-5 h-5" />,
      title: "The Journey",
      content: [
        'I\'ve been a tech "freak" since I was young – the constant advancements in technology have always amazed me. Started coding at 15 with a simple Python casino game that I had loads of fun building (though I lost the code somewhere along the way).',
        "What drew me to AI? It's the new frontier, but I've always been fascinated by ML and designing algorithms based on mathematical principles. There's something magical about being curious about an output and then building the path to get there.",
      ],
    },
    {
      number: "02",
      icon: <Heart className="w-5 h-5" />,
      title: "What Drives Me",
      content: [
        "I want to create something good – to help people. I love the challenge of it all, and I try to learn something new every day because in this fast-paced world, you'll fall behind if you don't stay curious.",
        'While some say you need to build "the next big thing" to be successful, I disagree. My focus is on building small things that make other people\'s lives easier. Success will come when it needs to – stay disciplined and enjoy the process.',
      ],
    },
    {
      number: "03",
      icon: <Coffee className="w-5 h-5" />,
      title: "Beyond Code",
      content: [
        "I'm a mixture of routine and spontaneity. Sports have been part of my life forever – football, golf, F1, and the gym keep me grounded. Always a Real Madrid fan, by the way. I also enjoy videogames when I need to unwind.",
        "Growing up in Madrid shaped my work ethic, but spending a year in a small town in Arkansas taught me something invaluable: you don't need a lot to be happy. That experience showed me the beauty of a simple, happy life.",
      ],
    },
    {
      number: "04",
      icon: <Globe className="w-5 h-5" />,
      title: "My Philosophy",
      content: [
        "No matter what you do, find joy in it. After the Hippocrates experience, I learned to dive deeper into understanding regulations and responsibilities before building – innovation and responsibility must go hand in hand.",
        "I'm just a simple human being who enjoys sports, laughs with friends, and isn't trying to be a big figure. I stick to my goals and try to make them work, one small step at a time.",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const aboutSection = document.getElementById("about-section");

      if (aboutSection) {
        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.offsetHeight;
        const scrollProgress =
          (scrollPosition - sectionTop + windowHeight) /
          (sectionHeight + windowHeight);

        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const chapterIndex = Math.floor(scrollProgress * chapters.length);
          setCurrentChapter(
            Math.min(Math.max(chapterIndex, 0), chapters.length - 1)
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters.length]);

  return (
    <div id="about-section" className="relative">
      {/* Spacer to create scroll distance */}
      <div className="h-[400vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden">
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6">
              {/* Header - Always visible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
                  About Me
                </h2>
                <div className="w-24 h-0.5 bg-neutral-900 mx-auto mb-6"></div>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Just a simple human being who found joy in building things
                  that make life a little easier for others.
                </p>
              </motion.div>

              {/* Progress Indicator */}
              <div className="absolute top-8 right-8 flex flex-col items-center space-y-2">
                {chapters.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1 h-4 rounded-full transition-all duration-500 ${
                      index === currentChapter
                        ? "bg-neutral-900"
                        : "bg-neutral-300"
                    }`}
                  />
                ))}
              </div>

              {/* Chapter Content */}
              <div className="relative min-h-[500px] flex items-center">
                {chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.number}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                      opacity: currentChapter === index ? 1 : 0,
                      x: currentChapter === index ? 0 : 50,
                      scale: currentChapter === index ? 1 : 0.95,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      opacity: { duration: 0.6 },
                      x: { duration: 0.8 },
                      scale: { duration: 0.8 },
                    }}
                    className={`absolute inset-0 flex items-start gap-8 md:gap-16 ${
                      currentChapter === index
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                    }`}
                  >
                    {/* Chapter Number & Icon */}
                    <div className="flex-shrink-0 relative">
                      <motion.div
                        animate={{
                          scale: currentChapter === index ? 1.1 : 1,
                          borderColor:
                            currentChapter === index ? "#171717" : "#d4d4d4",
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <span className="text-lg font-bold text-neutral-900">
                          {chapter.number}
                        </span>
                      </motion.div>
                      <motion.div
                        animate={{
                          scale: currentChapter === index ? 1.1 : 1,
                          backgroundColor:
                            currentChapter === index ? "#171717" : "#f5f5f5",
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute -right-3 -top-3 w-8 h-8 border border-neutral-300 rounded-full flex items-center justify-center text-neutral-600"
                      >
                        {chapter.icon}
                      </motion.div>
                    </div>

                    {/* Chapter Content */}
                    <div className="flex-1 pt-2">
                      <motion.div
                        animate={{ y: currentChapter === index ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                          {chapter.title}
                        </h3>
                        <motion.div
                          animate={{ width: currentChapter === index ? 48 : 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="h-0.5 bg-neutral-900"
                        />
                      </motion.div>

                      <motion.div
                        animate={{ y: currentChapter === index ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                      >
                        {chapter.content.map((paragraph, pIndex) => (
                          <motion.p
                            key={pIndex}
                            animate={{
                              opacity: currentChapter === index ? 1 : 0,
                              y: currentChapter === index ? 0 : 20,
                            }}
                            transition={{
                              duration: 0.6,
                              delay:
                                currentChapter === index
                                  ? 0.5 + pIndex * 0.1
                                  : 0,
                            }}
                            className="text-neutral-700 leading-relaxed text-lg font-light max-w-3xl"
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quote - Only show on last chapter */}
              <motion.div
                animate={{
                  opacity: currentChapter === chapters.length - 1 ? 1 : 0,
                  y: currentChapter === chapters.length - 1 ? 0 : 30,
                }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center pt-16"
              >
                <div className="relative inline-block">
                  <div className="absolute -top-4 -left-4 text-6xl text-neutral-200 font-serif">
                    &quot;
                  </div>
                  <p className="text-2xl font-light text-neutral-800 italic relative z-10">
                    No matter what you do, find joy in it.
                  </p>
                  <div className="absolute -bottom-4 -right-4 text-6xl text-neutral-200 font-serif rotate-180">
                    &quot;
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
