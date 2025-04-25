'use client';

import React, {useState, useEffect} from 'react';
import {Switch} from '@/components/ui/switch';
import MainNav from '@/components/ui/main-nav';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check local storage for theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <MainNav />
      <h1 className="text-3xl font-bold mb-5">Settings Page</h1>

      <div className="flex items-center justify-between mb-4">
        <label htmlFor="darkMode" className="text-lg font-medium">Dark Mode</label>
        <Switch id="darkMode" checked={darkMode} onCheckedChange={toggleDarkMode} />
      </div>

      {/* Add more user preference settings here */}
    </div>
  );
};

export default SettingsPage;
