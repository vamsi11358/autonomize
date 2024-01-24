import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Avatar from '../avatar';
import Link from 'next/link';

interface DescriptionProps {
  repoData: string | undefined;
}

const Description: React.FC<DescriptionProps> = () => {
  const router = useRouter();
  const { repoData } = router.query;
  const parsedRepoData = repoData ? JSON.parse(repoData as string) : null;

  useEffect(() => {
    if (!parsedRepoData) {
      router.push('/data');
    }
  }, [parsedRepoData, router]);

  return (
   
     <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <p style={{
        fontSize: '1.125rem',
        lineHeight: 1.5,
        marginBottom: '1rem'
      }}>
       {parsedRepoData && (
        <div>
          <h2  style={{
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>Repository Details</h2>
          <Avatar src={parsedRepoData.owner.avatar_url} alt="User Avatar" size="small" />
          <div style={{ marginLeft: '10px' }}>
            <p>
              <strong>Name:</strong> {parsedRepoData.name}
            </p>
            <p>
              <strong>Description:</strong> {parsedRepoData.description}
            </p>
          </div>
        </div>
      )}
      </p>
      
      <button style={{
        fontSize: '1.125rem',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.25rem',
        backgroundColor: '#007acc',
        color: '#fff',
        cursor: 'pointer'
      }}><Link href={'/data'}>Go Back</Link></button>
    </div>
  );
};

export default Description;
