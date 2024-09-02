import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Logic to save settings goes here
    console.log('Settings saved:', { username, email });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-lg">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-lg p-2 w-full"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="block text-lg">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg p-2 w-full"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="bg-indigo-600 text-white rounded-lg px-4 py-2"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;