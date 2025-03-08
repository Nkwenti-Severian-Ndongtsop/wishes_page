import React, { useState } from 'react';
import { FlowerIcon, UserRound, Heart, Leaf, Stars, Sparkles, Flower, MessageCircle } from 'lucide-react';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  if (!submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
        {/* Decorative flowers */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2
              }}
            >
              <FlowerIcon className="text-pink-400 w-12 h-12" />
            </div>
          ))}
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md w-full mx-4 transform transition-all hover:scale-105 relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-bloom">
            <UserRound className="text-pink-500 w-12 h-12" />
          </div>
          <div className="flex justify-center mb-6 relative">
            <Heart className="text-pink-500 w-12 h-12 animate-pulse" />
            <Leaf className="absolute -right-4 top-0 text-green-500 w-6 h-6 animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-6 animate-scaleIn">
            Enter Your Name
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name here..."
            className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity relative overflow-hidden group"
          >
            <span className="relative z-10">Celebrate Women's Day</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          >
            {i % 4 === 0 ? (
              <Heart className="text-pink-500 w-6 h-6" />
            ) : i % 4 === 1 ? (
              <Stars className="text-purple-500 w-6 h-6" />
            ) : i % 4 === 2 ? (
              <Sparkles className="text-rose-500 w-6 h-6" />
            ) : (
              <FlowerIcon className="text-pink-400 w-6 h-6" />
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4 animate-fadeIn">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Flower className="text-purple-500 w-20 h-20 animate-spin-slow" />
                <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500 w-10 h-10" />
                <div className="absolute -right-8 -top-4">
                  <UserRound className="text-pink-400 w-8 h-8 animate-float" style={{ animationDelay: '0.5s' }} />
                </div>
                <div className="absolute -left-8 -bottom-4">
                  <FlowerIcon className="text-purple-400 w-8 h-8 animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-purple-800 mb-6 animate-slideUp">
              Happy Women's Day, {name}!
            </h1>
            <p className="text-xl md:text-2xl text-purple-600 max-w-2xl mx-auto leading-relaxed animate-slideUp animation-delay-200">
              Celebrating the strength, grace, and incredible spirit of women everywhere
            </p>
          </div>
        </div>

        {/* Personal Message */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeIn relative">
            <div className="absolute -top-6 -left-6">
              <FlowerIcon className="text-purple-400 w-12 h-12 animate-float" />
            </div>
            <div className="absolute -bottom-6 -right-6">
              <UserRound className="text-pink-400 w-12 h-12 animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <MessageCircle className="text-purple-500 w-8 h-8" />
              <h2 className="text-2xl font-bold text-purple-800">A Special Message from @Nkwenti @Severian</h2>
            </div>
            <div className="space-y-4 text-lg text-purple-700">
              <p>
                Dear {name}, on this special Women's Day, I want to celebrate the remarkable woman you are. Your presence makes our the world brighter, and your contributions make our society stronger.
              </p>
              <p>
                May your day be filled with joy, love, and appreciation. You deserve to be celebrated not just today, but every day. Your strength inspires, your kindness touches hearts, and your achievements light the way for others.
              </p>
              <p>
                Remember that you are valued, respected, and cherished. Continue to shine your light and make a difference in your unique way.
              </p>
              <p className="font-semibold text-right pt-4">
                With warmest wishes,<br />
                @Nkwenti @Severian
              </p>
            </div>
          </div>
        </div>

        {/* Message Cards */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Strength",
                description: "Your resilience and determination inspire everyone around you"
              },
              {
                icon: <Stars className="w-8 h-8" />,
                title: "Beauty",
                description: "Your inner beauty shines through in everything you do"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Wisdom",
                description: "Your insights and understanding make the world a better place"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn relative overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -right-8 -top-8 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FlowerIcon className="text-pink-100 w-16 h-16" />
                </div>
                <div className="text-pink-500 mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{card.title}</h3>
                <p className="text-purple-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-white/40 backdrop-blur-sm py-16 mt-16 relative overflow-hidden">
          <div className="absolute -left-8 top-0">
            <UserRound className="text-pink-200 w-16 h-16 animate-float" />
          </div>
          <div className="absolute -right-8 bottom-0">
            <FlowerIcon className="text-purple-200 w-16 h-16 animate-float" style={{ animationDelay: '0.7s' }} />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-3xl italic text-purple-800">
              "A woman is like a tea bag - you can't tell how strong she is until you put her in hot water."
              <footer className="text-lg text-purple-600 mt-4">- Eleanor Roosevelt</footer>
            </blockquote>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-t from-pink-200 to-transparent py-8 text-center relative">
          <div className="absolute left-4 bottom-4">
            <FlowerIcon className="text-pink-300 w-8 h-8 animate-float" />
          </div>
          <div className="absolute right-4 bottom-4">
            <UserRound className="text-purple-300 w-8 h-8 animate-float" style={{ animationDelay: '0.3s' }} />
          </div>
          <p className="text-purple-700">Celebrating the amazing woman you are 💝</p>
        </footer>
      </div>
    </div>
  );
}

export default App;