import { FadeInOnScroll, HoverCard } from "@/components/ScrollReveal";

interface FooterProps {
  currentColor: string;
}

export default function Footer({ currentColor }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content - 3 Columns */}
        <FadeInOnScroll direction="up" duration={800} delay={200} elementId="footer-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Elijah Farrell</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Building the future, one line of code at a time.
              </p>
            </div>

          {/* Middle Column - Connect */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-4 flex-1 items-start">
              <a 
                href="https://github.com/elijah-farrell" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-200 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a 
                href="https://discord.com/users/zarnx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-200 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/elijah-farrell-915047349" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-200 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:elijah5003@gmail.com" 
                className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-200 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-200 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="flex flex-wrap gap-6">
              <a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium">
                Work
              </a>
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium">
                Contact
              </a>
            </div>
          </div>
          </div>
        </FadeInOnScroll>
        
        {/* Bottom Bar */}
        <FadeInOnScroll direction="up" duration={800} delay={400} elementId="footer-bottom">
          <div className="border-t border-gray-200 dark:border-neutral-700 pt-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                &copy; 2025 Elijah Farrell. All rights reserved.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </footer>
  );
} 