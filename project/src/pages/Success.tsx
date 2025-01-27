import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Star, LogOut } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light'
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_0_40px_rgba(255,192,203,0.3)] p-8 w-full max-w-md border border-pink-100">
        <div className="flex justify-center mb-6">
          <Star className="h-16 w-16 text-pink-400 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold text-black mb-4 text-center" style={{ fontFamily: 'cursive' }}>
          Express Yourself
        </h1>
        <p className="text-gray-600 mb-8 text-center italic">
          You're totally rocking it!
        </p>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center py-3 px-4 border-2 border-black rounded-xl shadow-sm text-sm font-bold text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-200 transform transition hover:scale-105"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Time to Go
        </button>
      </div>
    </div>
  );
};

export default Success;