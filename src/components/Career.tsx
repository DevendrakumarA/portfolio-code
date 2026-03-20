import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Web Developer</h4>
                <h5>Ads Ever Media, Noida</h5>
              </div>
              <h4>Aug 2024 – Present</h4>
            </div>
            <p>
              Promoted to Senior Web Developer at Ads Ever Media. Responsible
              for developing and optimizing dynamic web applications using PHP,
              Angular, JavaScript, HTML, CSS, and MySQL. Collaborate closely
              with the digital marketing and product teams to build
              SEO-friendly, high-performance websites and scalable backend
              systems. Focused on improving application performance,
              maintainability, and delivering reliable production-ready
              solutions.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Grow Media, Sanjay Place, Agra</h5>
              </div>
              <h4>Dec 2023 – Jun 2024</h4>
            </div>
            <p>
              Developed scalable web applications using PHP, Laravel, and MySQL.
              Built and maintained REST APIs, optimized database queries, and
              developed CMS-based platforms. Worked with cross-functional teams
              to deliver high-performance applications while improving system
              stability, performance, and maintainability.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>The Planet Retail, Noida</h5>
              </div>
              <h4>Jan 2023 – May 2023</h4>
            </div>
            <p>
              Worked as a Web Developer focusing on backend development and
              dynamic website creation using PHP, MySQL, JavaScript, HTML, and
              CSS. Built custom website modules, integrated APIs, and improved
              website performance. Contributed to developing CMS-based solutions
              and maintaining production web platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
