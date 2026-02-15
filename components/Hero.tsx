
import React from 'react';
import PlayStoreButton from './PlayStoreButton';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              <span className="text-blue-500">Where Style</span>
              <br/>
              Competes.
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-gray-300">
              BingeTry is a social styling platform where you experiment with real-world fashion and compete in style challenges — without ever clicking that "check out" button.
            </p>
            <p className="mt-4 text-lg md:text-xl text-white italic">
              Instagram gives validation for clothes you already own. BingeTry gives validation for who you COULD become.
            </p>
            <div className="mt-8">
              <PlayStoreButton />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl opacity-30 blur-2xl"></div>
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
              <img
                src="https://humanaigc.github.io/outfit-anyone/content/teaser/t3.gif"
                alt="BingeTry outfit swapping demo"
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs flex items-center space-x-2 pointer-events-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Live Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
