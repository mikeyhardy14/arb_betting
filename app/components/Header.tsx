// app/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/live-odds">Live Odds</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/current-odds">Current Odds</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/over-under">Over/Under</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    fontSize: '18px',
  },
};

export default Header;
