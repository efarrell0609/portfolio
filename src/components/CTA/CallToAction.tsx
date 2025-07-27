interface CallToActionProps {
  currentColor: string;
}

export default function CallToAction({ currentColor }: CallToActionProps) {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-700 dark:to-neutral-800 rounded-3xl p-12 sm:p-8 relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: currentColor }}
          />
          <div 
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: currentColor }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can contribute to your team and help bring
              innovative ideas to life.
            </p>
            <div className="flex gap-4 sm:flex-col sm:gap-3 justify-center">
              <button 
                className="px-8 py-4 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: currentColor }}
              >
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 