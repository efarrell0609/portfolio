interface SoftSkillsProps {
  currentColor: string;
}

export default function SoftSkills({ currentColor }: SoftSkillsProps) {
  const softSkills = [
    { 
      name: 'Problem Solving', 
      description: 'Critical thinking and analytical approach',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    { 
      name: 'Team Collaboration', 
      description: 'Working effectively in diverse teams',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
        </svg>
      )
    },
    { 
      name: 'Communication', 
      description: 'Clear and effective communication',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      )
    },
    { 
      name: 'Adaptability', 
      description: 'Quick learning and flexibility',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      )
    },
    { 
      name: 'Project Management', 
      description: 'Organized and efficient delivery',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      )
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Professional Skills
        </h3>
        <p className="text-gray-600 dark:text-gray-300">Core competencies that drive success</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {softSkills.map((skill) => (
          <div key={skill.name} className="group bg-white dark:bg-neutral-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-neutral-600 hover:scale-105">
            <div className="text-center">
              <div 
                className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center text-white"
                style={{ backgroundColor: currentColor }}
              >
                {skill.icon}
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 