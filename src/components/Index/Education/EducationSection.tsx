import { useState } from 'react';
import { FadeInOnScroll, HoverCard } from "@/components/ScrollReveal";

interface EducationSectionProps {
  currentColor: string;
}

export default function EducationSection({ currentColor }: EducationSectionProps) {
  const [showMoreCourses, setShowMoreCourses] = useState(false);

  const coreCourses = [
    'CS 108 – Computing Fundamentals',
    'CS 240 – Data Structures & Algorithms',
    'CS 220 – Computer Organization',
    'CS 330 – Operating Systems & Networking',
    'CS 249 – Object-Oriented Programming',
    'CS 370 – Software Engineering',
    'CS 431 – Principles of Programming Languages',
    'CS 350 – Information & Knowledge Management',
    'IS 320 – Systems Analysis & Design',
    'CS 324 – Internet Tools (Web Programming)'
  ];

  const advancedElectives = [
    'CS 377 – Introduction to Theory of Computing',
    'CS 470 – Computer Vision and Image Processing',
    'CS 477 – Algorithms',
    'CS 498 – Capstone Project'
  ];

  const relatedCourses = [
    'MAT 151 – Calculus I',
    'MAT 152 – Calculus II',
    'MAT 115 – Finite Math for CS',
    'PHY 101 – General Physics I',
    'CHE 110T/L – Chemistry Lecture & Lab'
  ];

  return (
    <section id="education" className="py-12 px-4 sm:px-6 bg-white dark:bg-black">
      
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll direction="up" duration={800} delay={200} elementId="education-header">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div 
              className="w-20 h-1 mx-auto rounded-full mb-4"
              style={{ backgroundColor: currentColor }}
            />
          </div>
        </FadeInOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* SUNY Poly */}
          <FadeInOnScroll direction="right" duration={800} delay={400} elementId="education-suny">
            <HoverCard scale={1.02} shadowIntensity={20} className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-neutral-600">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/About/suny-poly-logo.jpg"
                    alt="SUNY Polytechnic Institute Logo"
                    className="w-32 h-32 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    SUNY Polytechnic Institute
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    B.S. in Computer Science
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    May 2025 · GPA: 3.88 · Magna Cum Laude
                  </p>
                </div>
              </div>
            </HoverCard>
          </FadeInOnScroll>

          {/* JCC */}
          <FadeInOnScroll direction="left" duration={800} delay={600} elementId="education-jcc">
            <HoverCard scale={1.02} shadowIntensity={20} className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-neutral-600">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/About/jcc-logo.png"
                    alt="Jefferson Community College Logo"
                    className="w-32 h-32 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Jefferson Community College
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    A.S. in Computer Science
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    2023 · Phi Theta Kappa Honor Society
                  </p>
                </div>
              </div>
            </HoverCard>
          </FadeInOnScroll>
        </div>

        {/* Core CS Courses */}
        <FadeInOnScroll direction="up" duration={800} delay={800} elementId="education-courses">
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Core Computer Science Courses
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fundamental coursework that forms the foundation of my CS education
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {coreCourses.map((course) => (
                <HoverCard 
                  key={course}
                  scale={1.02} 
                  shadowIntensity={10} 
                  className="bg-white dark:bg-neutral-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-neutral-600"
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: currentColor }}
                    />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {course}
                    </span>
                  </div>
                </HoverCard>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Reveal More Button */}
        {!showMoreCourses && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowMoreCourses(true)}
              className="px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
              style={{ backgroundColor: currentColor }}
            >
              <svg 
                className="w-5 h-5 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
              <span>Show More Courses</span>
            </button>
          </div>
        )}

        {/* Additional Courses (Hidden by default) */}
        {showMoreCourses && (
          <div className="space-y-8">
            {/* Advanced Computer Science Electives */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Advanced Computer Science Electives
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Upper-division courses that show depth in the field
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advancedElectives.map((course) => (
                  <div 
                    key={course}
                    className="bg-white dark:bg-neutral-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-neutral-600 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: currentColor }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {course}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Technical & Math Courses */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Related Technical & Math Courses
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Courses that support CS skills with technical foundations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedCourses.map((course, index) => (
                  <div 
                    key={course}
                    className={`bg-white dark:bg-neutral-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-neutral-600 hover:shadow-md transition-all duration-300 ${
                      index === relatedCourses.length - 1 && relatedCourses.length % 2 === 1 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: currentColor }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {course}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Show Less Button at Bottom */}
            <div className="text-center pt-4">
              <button
                onClick={() => setShowMoreCourses(false)}
                className="px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
                style={{ backgroundColor: currentColor }}
              >
                <svg 
                  className="w-5 h-5 transition-transform duration-200 rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
                <span>Show Less</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 