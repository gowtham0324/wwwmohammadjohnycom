import { useEffect, useState } from 'react';

const WEBSITE_URL = 'https://www.mohammadjohny.com';

function App() {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirecting(true);
      window.location.href = WEBSITE_URL;
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell">
      <div className="page-layout">
        <header className="page-header">
          <h1>Johhny Site</h1>
          <p>Launch page for www.mohammadjohny.com</p>
        </header>

        <div className="card">
          <h2>Welcome to Mohammad Johny</h2>
          <p>
            This React base page is prepared for <strong>www.mohammadjohny.com</strong>.
          </p>
          <p>Click the button below to open the website immediately.</p>
          <a className="button" href={WEBSITE_URL} target="_blank" rel="noreferrer">
            Open Website
          </a>
          <p className="note">
            You will be redirected automatically in 5 seconds.
          </p>
          {redirecting && <p className="note">Redirecting now...</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
