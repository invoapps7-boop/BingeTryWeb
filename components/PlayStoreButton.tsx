
import React from 'react';

interface PlayStoreButtonProps {
  className?: string;
}

const PlayStoreIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 22V2l18 10L3 22zm3.3-3.3l9.9-5.7-9.9-5.7v11.4z"/>
    </svg>
);


const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({ className = '' }) => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.bingetry.vitualtryon&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#007BFF] to-[#3B82F6] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black transition-transform transform hover:scale-105 ${className}`}
    >
      <PlayStoreIcon />
      Get on Play Store
    </a>
  );
};

export default PlayStoreButton;