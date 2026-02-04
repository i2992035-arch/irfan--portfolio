export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2>Education</h2>
          <p>My learning journey and academic background</p>
        </div>
        <div className="education-list">
          <div className="education-card">
            <div
              className="education-icon"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontSize: 0,
              }}
            ></div>
            <div className="education-info">
              <h3>Bachelor's in AI &amp; ML</h3>
              <h4>Kashi University, India</h4>
              <p>
                Focused on Computer Science fundamentals, Data Structures,
                Algorithms, and exploring AI/ML concepts.
              </p>
            </div>
            <div className="education-year">Currently Pursuing</div>
          </div>

          <div className="education-card">
            <div
              className="education-icon"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontSize: 0,
              }}
            ></div>
            <div className="education-info">
              <h3>Higher Secondary Certificate (HSC)</h3>
              <h4>Maharashtra College</h4>
              <p>
                Completed higher secondary education with focus on Science
                stream, building a strong foundation for computer science.
              </p>
            </div>
            <div className="education-year">2024 - 2025</div>
          </div>

          <div className="education-card">
            <div
              className="education-icon"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&h=200&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontSize: 0,
              }}
            ></div>
            <div className="education-info">
              <h3>Secondary School Certificate (SSC)</h3>
              <h4>Nehru Nagar MPS</h4>
              <p>
                Completed secondary education with strong academic performance
                and developed interest in technology and programming.
              </p>
            </div>
            <div className="education-year">2022 - 2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}
