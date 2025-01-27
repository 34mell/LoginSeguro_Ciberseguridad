import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User, Star } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/success');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light'
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_0_40px_rgba(255,192,203,0.3)] p-8 w-full max-w-md border border-pink-100">
        <div className="text-center mb-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <Star className="h-8 w-8 text-pink-400 animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: 'cursive' }}>Passion for Fashion</h1>
          <p className="text-gray-600 mt-2 italic">Enter your credentials to slay</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-pink-400" />
              </div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border-2 border-black rounded-xl leading-5 bg-white/80 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-pink-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border-2 border-black rounded-xl leading-5 bg-white/80 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="text-pink-500 text-sm text-center font-bold">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border-2 border-black rounded-xl shadow-sm text-sm font-bold text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-200 transform transition hover:scale-105"
          >
            Rock The Look
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;