"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { login, signup } from '@/store/userSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { LoadingSpinnerWithOverlay } from '@/component/global/Loading';
import { GoogleSignIn, GoogleSignUp } from '@/component/Authentication';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const dispatch = useDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password || (formData.password.length < 8 && !isLogin)) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = "Full name is required.";
      }
      if (!formData.phone || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = "Enter a valid 10-digit phone number.";
      }
    }
    if (Object.keys(newErrors).length > 0) {
      toast.error(Object.values(newErrors).join(' '));
    }
    return Object.keys(newErrors).length === 0;
  };

  function clearForm() {
    setFormData({
      name: '',
      phone: '',
      email: '',
      password: '',
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    if (validateForm()) {
      if (isLogin) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await dispatch(login(formData as any) as any);
        if (response?.error) {
          setLoading(false)
          toast.error(response.error.message)
        } else {
          toast.success("User Logged in Successfully")
          router.push('/')
          clearForm()
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await dispatch(signup(formData as any) as any);
        if (response?.error) {
          setLoading(false)
          toast.error(response.error.message);
        } else {
          toast.success('Account created successfully!');
          router.push('/');
          clearForm()
        }
      }
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex flex-col items-center justify-center p-4">
      {/* Header */}
      {
        loading && <LoadingSpinnerWithOverlay />
      }
      <header className="w-full max-w-md mb-8">
        <Link href="/" className="flex items-center justify-center space-x-1 text-2xl font-bold">
          <span className="text-teal-900">Stay</span>
          <span className="text-teal-600 font-light">Unfiltered</span>
        </Link>
        <p className="text-center mt-2 text-teal-700">
          {isLogin ? 'Welcome back to your mental wellness journey' : 'Join our supportive community'}
        </p>
      </header>

      {/* Auth Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 font-medium text-center transition-colors duration-300 ${isLogin
              ? 'bg-teal-600 text-white'
              : 'bg-white text-gray-600 hover:bg-teal-50'
              }`}
            onClick={() => { setIsLogin(true); clearForm() }}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 font-medium text-center transition-colors duration-300 ${!isLogin
              ? 'bg-teal-600 text-white'
              : 'bg-white text-gray-600 hover:bg-teal-50'
              }`}
            onClick={() => { setIsLogin(false); clearForm() }}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          {!isLogin && (
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-teal-600" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-teal-600" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-teal-600" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="mb-8">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-teal-600" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder={isLogin ? "Enter your password" : "Create a password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-teal-600" />
                ) : (
                  <FaEye className="text-teal-600" />
                )}
              </div>
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-end items-center mb-6">
              {/* <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-teal-600 transition duration-150 ease-in-out rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label> */}
              <Link href="/forgot-password" className="text-sm text-teal-600 hover:text-teal-800 transition-colors">
                Forgot password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            {isLogin ? 'Login to Your Account' : 'Create Account'}
          </button>
        </form>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-teal-600 font-medium hover:text-teal-800 transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>

          <div className="mt-4 flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="px-3 text-gray-500 text-sm">Or continue with</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          {
            isLogin
              ? <GoogleSignIn />
              : <GoogleSignUp />
          }
        </div>
      </div>

    </div>
  );
};

export default AuthPages;