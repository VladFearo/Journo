const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Journo</h1>
        <p>
          Your personal journaling app to document your thoughts and
          experiences.
        </p>
        <button className="landing-button">Get Started</button>
      </header>

      <section id="features" className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Easy to Use</h3>
            <p>
              Intuitive and user-friendly interface to make journaling simple
              and enjoyable.
            </p>
          </div>
          <div className="feature">
            <h3>Secure</h3>
            <p>
              Your journal entries are private and secure, accessible only by
              you.
            </p>
          </div>
          <div className="feature">
            <h3>Accessible</h3>
            <p>Access your journal from any device, anywhere, anytime.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Journo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
