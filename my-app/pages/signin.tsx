import React, { useState } from 'react';
import Avatar from './avatar';
import { useRouter } from 'next/router';

const GitHubRepoSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  const handleInputChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();

    try {
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userJson = await userResponse.json();
      // console.log(userJson, 'userjson');

      if (userJson.login !== null || userJson.login !== undefined) {
        // Fetch user repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const reposJson = await reposResponse.json();
        console.log(reposJson, 'userjson');

        // Store data in local storage
        localStorage.setItem('userData', JSON.stringify(userJson));
        localStorage.setItem('repos', JSON.stringify(reposJson));

        // Redirect to the /data page
        router.push('/data');
      }

      setUserData(userJson);
    } catch (error) {
      console.error('Error fetching data from GitHub API', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <label style={{ marginBottom: '10px' }}>
          GitHub Username:
          <input type="text" value={username} onChange={handleInputChange} style={{ marginRight: '10px' }} />
        </label>
        <button type="submit" style={{ cursor: 'pointer' }}>Search</button>
      </form>
    </div>
  );
};

export default GitHubRepoSearch;
