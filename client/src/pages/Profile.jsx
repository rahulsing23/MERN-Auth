import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="=h-24 w-24 self-center cursor-pointer rounded-full object-cover"
        />
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3 mt-2"
          defaultValue={currentUser.username}
        />

        <input
          type="text"
          id="email"
          defaultValue={currentUser.email}
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3 mt-2"
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3 mt-2"
        />
        <button
          className="bg-slate-700 text-white p-3
        rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700'>Delete Account</span>
        <span className='text-red-700'>Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
