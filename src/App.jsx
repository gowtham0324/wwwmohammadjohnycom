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
      <div className="page-layout">
        <header className="page-header">
          <h1>Mohammad Johny Login</h1>
          <p>Sign in with your username to continue.</p>
        </header>

        <div className="card">
          <h2>Login</h2>
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
      </div>
    </div>
  );
}

export default App;
