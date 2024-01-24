import React, { useEffect } from 'react';
import Avatar from '../avatar';
import Link from 'next/link';

interface UserInfoProps {
  userData: string | undefined;
}

const UserInfo: React.FC<UserInfoProps> = () => {
  const userData = localStorage.getItem('userData');
  const parsedUserData = userData ? JSON.parse(userData) : null;
  //console.log(parsedUserData, 'parsedUserData');

  const repos = localStorage.getItem('repos');
  const parsedRepos = repos ? JSON.parse(repos) : [];
  console.log(parsedRepos, 'parsedRepo');

  useEffect(() => {
    if (userData) {
      try {
        console.log(parsedUserData, 'parsedUserData');
      } catch (error) {
        console.error('Error parsing userData:', error);
      }
    }
  }, [userData]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
     
      {parsedRepos.length > 0 && (
        <div>
          <h2>Repositories</h2>
          <ul>
          {parsedRepos.length > 0 && (
  <div>
    <h2>Repositories</h2>
    <ul>
      {parsedRepos.map((repo: any) => (
        <li key={repo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Link href="/userDetails">
          <Avatar src={repo.owner.avatar_url} alt="User Avatar" size="small" />
          </Link>
          <div style={{ marginLeft: '10px' }}>
            <Link href={`/description?repoData=${JSON.stringify(repo)}`}>
              <strong>{repo.name}</strong>
            </Link>: {repo.description}
          </div>
        </li>
      ))}
    </ul>
  </div>
)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
