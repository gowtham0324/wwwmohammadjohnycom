import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!username.trim()) {
      setError('Please enter your username');
      return;
    }

    setError('');
    setSubmitted(true);
  }

  return (
    <div className="app-shell">
      <div className="site-shell">
        <header className="site-header">
          <div>
            <p className="site-brand">Mohammad Johny</p>
            <p className="site-tag">Secure login portal</p>
          </div>
        </header>

        <main className="page-layout">
          <section className="page-header">
            <h1>Login</h1>
            <p>Sign in with your username to continue.</p>
          </section>

          <div className="card">
            {!submitted ? (
              <>
                <p>Please enter your username below.</p>
                <form className="login-form" onSubmit={handleSubmit}>
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter your username"
                  />
                  {error && <p className="error">{error}</p>}
                  <button className="button" type="submit">
                    Login
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <p>Welcome, <strong>{username}</strong>!</p>
                <p>You are now logged in.</p>
              </div>
            )}
          </div>
        </main>

        <footer className="site-footer">
          <h2>About Us</h2>
          <p>
            Mohammad Johny is a secure portal built to give users fast access to the site.
            We focus on simplicity, speed, and ease of use.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
