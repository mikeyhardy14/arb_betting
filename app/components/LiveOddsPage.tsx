'use client';

import { useEffect, useState } from 'react';

const fetchLiveOdds = async () => {
  // Replace this with actual API call
  return [
    { sportsbook: 'Fanduel', odds: 2.5, logo: '/public/logos/sportsbooks/fanduel.png' },
    { sportsbook: 'Bet365', odds: 2.5, logo: '/public/logos/sportsbooks/bet365.png' },
    { sportsbook: 'BetMGM', odds: 3.0, logo: '/public/logos/sportsbooks/betmgm.png' },
  ];
};

const fetchTeamInfo = async () => {
  // Replace with actual team data (you can expand this based on your API)
  return {
    teamA: { name: 'Team A', logo: '/logos/teams/teamA.png' },
    teamB: { name: 'Team B', logo: '/logos/teams/teamB.png' },
  };
};

const LiveOddsPage = () => {
  const [odds, setOdds] = useState<any[]>([]);
  const [teams, setTeams] = useState<any>({});

  useEffect(() => {
    const interval = setInterval(async () => {
      const liveOdds = await fetchLiveOdds();
      const teamData = await fetchTeamInfo();
      setOdds(liveOdds);
      setTeams(teamData);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const checkForOverlap = () => {
    const oddsValues = odds.map((o) => o.odds);
    const overlaps = oddsValues.filter(
      (value, index, self) => self.indexOf(value) !== index
    );
    return overlaps;
  };

  const overlaps = checkForOverlap();

  return (
    <div style={styles.container}>
      <h2>Live Odds</h2>

      {/* Team Logos and Names */}
      <div style={styles.teamSection}>
        <div style={styles.team}>
          <img src={teams.teamA?.logo} alt={teams.teamA?.name} style={styles.teamLogo} />
          <p>{teams.teamA?.name}</p>
        </div>
        <p style={styles.vs}>VS</p>
        <div style={styles.team}>
          <img src={teams.teamB?.logo} alt={teams.teamB?.name} style={styles.teamLogo} />
          <p>{teams.teamB?.name}</p>
        </div>
      </div>

      {/* Odds Table */}
      <table style={styles.oddsTable}>
        <thead>
          <tr>
            <th>Sportsbook</th>
            <th>Odds</th>
          </tr>
        </thead>
        <tbody>
          {odds.map((odd, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: overlaps.includes(odd.odds) ? 'blue' : 'white',
              }}
            >
              <td style={styles.sportsbook}>
                <img
                  src={odd.logo}
                  alt={odd.sportsbook}
                  style={styles.sportsbookLogo}
                />
                {odd.sportsbook}
              </td>
              <td>{odd.odds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  teamSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  team: {
    textAlign: 'center',
    marginRight: '20px',
  },
  teamLogo: {
    width: '50px',
    height: '50px',
  },
  vs: {
    fontSize: '24px',
    margin: '0 20px',
  },
  oddsTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  sportsbook: {
    display: 'flex',
    alignItems: 'center',
  },
  sportsbookLogo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  tableHeader: {
    backgroundColor: '#f8f8f8',
    fontWeight: 'bold',
  },
};

export default LiveOddsPage;
