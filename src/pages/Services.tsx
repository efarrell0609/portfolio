import { useState, useEffect } from "react";
import { useSettings } from "@/contexts/SettingsContext";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { FadeInOnScroll } from "@/components/ScrollReveal";

export default function Services() {
  const { darkMode, currentColor } = useSettings();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full font-['Inter'] transition-colors duration-300 bg-white dark:bg-black">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll direction="up" duration={1000} delay={200} initialOpacity={0} elementId="services-hero">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Professional development and consulting services
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 px-4 sm:px-6 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll direction="up" duration={1000} delay={400} initialOpacity={0} elementId="coming-soon">
              <div className="mb-12">
                <div 
                  className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${currentColor}20` }}
                >
                  <svg 
                    className="w-12 h-12" 
                    style={{ color: currentColor }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Coming Soon
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  I'm currently developing my professional services. This page will showcase my consulting, development, and technical services.
                </p>
                <div 
                  className="inline-block px-6 py-3 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${currentColor}20`, 
                    color: currentColor,
                    border: `1px solid ${currentColor}40`
                  }}
                >
                  Under Development
                </div>
              </div>
            </FadeInOnScroll>

            {/* Placeholder Services */}
            <FadeInOnScroll direction="up" duration={1000} delay={600} initialOpacity={0} elementId="placeholder-services">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {[
                  {
                    title: "Web Development",
                    description: "Custom web applications and responsive websites",
                    icon: "💻"
                  },
                  {
                    title: "Technical Consulting",
                    description: "Expert advice on software architecture and implementation",
                    icon: "🔧"
                  },
                  {
                    title: "System Integration",
                    description: "Seamless integration of complex systems and APIs",
                    icon: "🔗"
                  }
                ].map((service, index) => (
                  <div 
                    key={service.title}
                    className="p-8 rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-600 bg-gray-50 dark:bg-neutral-800"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      <Footer currentColor={currentColor} />
    </div>
  );
} 