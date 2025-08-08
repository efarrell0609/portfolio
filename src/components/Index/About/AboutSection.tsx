import ProfileCard from "./ProfileCard";
import { FadeInOnScroll, HoverCard } from "@/components/ScrollReveal";
import { useRef, useEffect, useState } from "react";
import headshotImg from "@/assets/headshot.png";

interface AboutSectionProps {
  currentColor: string;
}

export default function AboutSection({ currentColor }: AboutSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setUnderlineWidth(titleRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="about" className="pt-12 pb-16 px-4 sm:px-6 bg-gray-50 dark:bg-neutral-900">
      
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll direction="up" duration={800} delay={200} elementId="about-header">
          <div className="mb-16">
            <h2 
              ref={titleRef}
              className="text-6xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              About Me
            </h2>
            <div 
              className="h-1.5 rounded-full"
              style={{ 
                backgroundColor: currentColor,
                width: `${underlineWidth}px`
              }}
            />
          </div>
        </FadeInOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll direction="right" duration={800} delay={400} elementId="about-text">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about working with all sorts of technology whether it's building software, managing data, solving system issues, or learning new tools. I'm excited by the variety of paths within tech and open to opportunities in software development, data, IT, and other technical roles.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At my core, I love solving problems and figuring out how things work. I enjoy diving into complex systems, simplifying workflows, and contributing to projects that make a real impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Outside of tech, you'll usually find me on a hiking trail, playing video games, or wathcing sports and hanging out with my friends. I think staying curious and engaged in different areas of life helps me stay creative and adaptable in my work too.
              </p>
            </div>
          </FadeInOnScroll>
          
          <FadeInOnScroll direction="left" duration={800} delay={600} elementId="about-profile">
            <div className="flex justify-center items-center w-full">
              <HoverCard scale={1.02} shadowIntensity={15}>
                <ProfileCard
                  name="Elijah Farrell"
                  title="CS Graduate"
                  handle="elijahfarrell"
                  status="Available for Opportunities"
                  contactText="Contact Me"
                  avatarUrl={headshotImg}
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={false}
                  themeColor={currentColor}
                  onContactClick={() => window.open('mailto:elijah5003@gmail.com', '_blank')}
                />
              </HoverCard>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
} 