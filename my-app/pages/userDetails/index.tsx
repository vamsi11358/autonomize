// userdetails.tsx
import React from 'react';
import { useRouter } from 'next/router';

const UserDetails = () => {
  const router = useRouter();
  const userData = localStorage.getItem('userData');
  const parsedUserData = userData ? JSON.parse(userData) : null;

  if (!parsedUserData) {
    return <p>No user data available.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
      <div>
        <img src={parsedUserData.avatar_url} alt="User Avatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
      </div>
      <div style={{ marginLeft: '10px' }}>
        <h2>User Information</h2>
        <p>
          <strong>Login:</strong> {parsedUserData.login}
        </p>
        <p>
          <strong>Name:</strong> {parsedUserData.name}
        </p>
        <p>
          <strong>Followers:</strong> {parsedUserData.followers}
        </p>
        <p>
          <strong>Following:</strong> {parsedUserData.following}
        </p>
        <p>
          <strong>Email:</strong> {parsedUserData.email}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
