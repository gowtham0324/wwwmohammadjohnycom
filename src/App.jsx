const WEBSITE_URL = 'https://www.mohammadjohny.com';

function App() {
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
            The site loads directly without automatic redirection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
