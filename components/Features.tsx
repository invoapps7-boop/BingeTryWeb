
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4">
    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-gray-900 text-blue-500 rounded-lg">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-1 text-gray-300">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
    const featuresList = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
            title: 'Brand Sponsored Challenges',
            description: 'Compete in challenges sponsored by top fashion brands to win exclusive rewards and get noticed.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            title: 'Gain Status & Validation',
            description: 'Rise through the ranks, get feedback from a style-savvy community, and build your confidence.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l4 4M3 17l4 4" /></svg>,
            title: 'Discover Your Aesthetic Identity',
            description: 'Experiment with unique aesthetics and clothing you\'ve always wanted to try in a creative, judgment-free zone.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z" /></svg>,
            title: 'Social Styling Platform',
            description: 'This is more than an app; it\'s a community. Share looks, follow trends, and connect with fellow fashion lovers.'
        }
    ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Future of Fashion is <span className="text-blue-500">You.</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">Everything you need to redefine your fashion game.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;