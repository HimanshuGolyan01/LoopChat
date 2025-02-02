import React from "react";

const Chat = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      <header className="w-full bg-gray-100 py-4 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">LoopChat</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search User"
              className="border border-gray-300 rounded-lg px-3 py-1 focus:ring focus:ring-gray-400"
            />
            <img
              src="/path-to-notification-icon.svg"
              alt="Notifications"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="/path-to-profile-icon.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </header>

      <main className="flex flex-1 w-full max-w-6xl mx-auto px-4 py-6">
        <aside className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">My Chats</h2>
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
              New Group Chat +
            </button>
          </div>
          <ul className="space-y-2">
            <li className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100">
              <p className="font-medium">Guest User</p>
              <p className="text-sm text-gray-600">woooo</p>
            </li>
            <li className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100">
              <p className="font-medium">Time</p>
              <p className="text-sm text-gray-600">yo</p>
            </li>
            <li className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100">
              <p className="font-medium">RoadSide Coder Fam ⭐</p>
              <p className="text-sm text-gray-600">🙌❤️❤️❤️</p>
            </li>
            <li className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100">
              <p className="font-medium">YouTube Demo</p>
              <p className="text-sm text-gray-600">ssup</p>
            </li>
            <li className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100">
              <p className="font-medium">Karle Vedant Prasad</p>
              <p className="text-sm text-gray-600">hello there</p>
            </li>
          </ul>
        </aside>

        <section className="flex-1 bg-gray-50 rounded-lg shadow-md ml-6 p-6 flex items-center justify-center">
          <p className="text-lg text-gray-500">Click on a user to start chatting</p>
        </section>
      </main>
    </div>
  );
};

export default Chat;
