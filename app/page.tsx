// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from './components/Header';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/live-odds'); // Redirect to live odds by default
  }, [router]);

  return (
    <div>
      <Header />
      <h1>Welcome to the Sportsbook App</h1>
      <p>Redirecting to Live Odds...</p>
    </div>
  );
};

export default Home;
