'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import MainNav from '@/components/ui/main-nav';

const ProfilePage = () => {
  // Mock user data (replace with Firebase Auth user data later)
  const user = {
    name: 'John Doe',
    profilePicture: 'https://picsum.photos/100/100', // Placeholder image
  };

  const handleLogout = () => {
    // TODO: Implement logout functionality using Firebase Auth
    alert('Logout functionality not implemented yet.');
  };

  return (
    <div className="container mx-auto py-10">
      <MainNav />
      <h1 className="text-3xl font-bold mb-5">Profile Page</h1>

      <div className="flex items-center mb-4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="rounded-full w-20 h-20 mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">Manager</p> {/* Replace with actual role */}
        </div>
      </div>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default ProfilePage;
