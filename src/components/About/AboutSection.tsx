import ProfileCard from "./ProfileCard";

interface AboutSectionProps {
  currentColor: string;
}

export default function AboutSection({ currentColor }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div 
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: currentColor }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          
          <div className="flex justify-center items-center w-full">
            <ProfileCard
              name="Elijah Farrell"
              title="CS Graduate"
              handle="elijahfarrell"
              status="Available for Opportunities"
              contactText="Contact Me"
              avatarUrl="/profile.jpg"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              themeColor={currentColor}
              onContactClick={() => window.open('mailto:elijah5003@gmail.com', '_blank')}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 