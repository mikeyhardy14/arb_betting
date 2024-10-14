'use client'
// app/components/CurrentOddsPage.tsx
import { useEffect, useState } from 'react';

const fetchCurrentOdds = async () => {
  // Replace this with actual API call
  return [
    { sportsbook: 'Fanduel', odds: 2.5 },
    { sportsbook: 'Bet365', odds: 2.7 },
    { sportsbook: 'BetMGM', odds: 3.1 },
  ];
};

const CurrentOddsPage = () => {
  const [odds, setOdds] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentOdds = await fetchCurrentOdds();
      setOdds(currentOdds);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Current Odds</h2>
      <table>
        <thead>
          <tr>
            <th>Sportsbook</th>
            <th>Odds</th>
          </tr>
        </thead>
        <tbody>
          {odds.map((odd, index) => (
            <tr key={index}>
              <td>{odd.sportsbook}</td>
              <td>{odd.odds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentOddsPage;
