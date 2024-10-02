import React, { useEffect, useState } from 'react';

import home from '../assets/images/Online test-amico.png'; 
import about from '../assets/images/About us page-rafiki.png';
import customImg from '../assets/images/custom.png';
import integrityImg from '../assets/images/integrity.png';
import supervisionImg from '../assets/images/supervision.png';
import fairnessImg from '../assets/images/fairness.png';
import feedbackImg from '../assets/images/feed.png';
import solution1Img from '../assets/images/solution1.png';
import solution2Img from '../assets/images/solution2.png';
import solution3Img from '../assets/images/solution3.png';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import feature1 from '../assets/images/feature1.png';
import feature2 from '../assets/images/feature2.png';
import feature3 from '../assets/images/feature3.png';
import feature4 from '../assets/images/feature4.png';
import feature5 from '../assets/images/feature5.png';
import feature6 from '../assets/images/feature6.png';


function Hero() {
  const [activeTab, setActiveTab] = useState('business');

  const showTab = (tab) => {
      setActiveTab(tab);
  };

  useEffect(() => {
      /** 
       * navbar toggle 
       */ 
      const header = document.querySelector("[data-header]"); 
      const navToggleBtn = document.querySelector("[data-nav-toggle-btn]"); 
      const backTopBtn = document.querySelector("[data-back-to-top]");

      const handleToggle = () => {
          header.classList.toggle("nav-active"); 
          navToggleBtn.classList.toggle("active"); 
      };

      if (navToggleBtn) { // Check if the button exists
          navToggleBtn.addEventListener("click", handleToggle);
          
          /** 
           * toggle the navbar when clicking any navbar link 
           */ 
          const navbarLinks = document.querySelectorAll("[data-nav-link]"); 
          for (let i = 0; i < navbarLinks.length; i++) { 
              navbarLinks[i].addEventListener("click", handleToggle); 
          }
      }

      // Scroll event listener to manage header and back to top button
      const handleScroll = () => {
          if (window.scrollY >= 100) {
              header.classList.add("active");
              if (backTopBtn) backTopBtn.classList.add("active");
          } else {
              header.classList.remove("active");
              if (backTopBtn) backTopBtn.classList.remove("active");
          }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup function
      return () => {
          if (navToggleBtn) {
              navToggleBtn.removeEventListener("click", handleToggle);
          }
          const navbarLinks = document.querySelectorAll("[data-nav-link]"); 
          for (let i = 0; i < navbarLinks.length; i++) { 
              navbarLinks[i].removeEventListener("click", handleToggle); 
          }
          window.removeEventListener("scroll", handleScroll);
      };
  }, []); // The empty dependency array ensures this runs once on mount and cleans up on unmount


  

    return (
      <>
        <header className="header" data-header>
          <div className="container">
            <a href="#">
              <h1 className="logo">AssessPro</h1>
            </a>
  
            <button class="nav-toggle-btn" aria-label="Toggle Menu" data-nav-toggle-btn>
        <ion-icon name="menu-outline" class="menu-icon"></ion-icon>
        <ion-icon name="close-outline" class="close-icon"></ion-icon>
      </button>
  
            <nav className="navbar container">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>Home</a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>About</a>
                </li>
                <li>
                  <a href="#services" className="navbar-link" data-nav-link>Services</a>
                </li>
                <li>
                  <a href="#solutions" className="navbar-link" data-nav-link>Solutions</a>
                </li>
                <li>
                  <a href="#testimonials" className="navbar-link" data-nav-link>Testimonials</a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
                </li>
                <li>
                  <a href="../register_student.php" className="btn btn-primary">Login & Signup</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section 
    className="hero" 
    id="home" 
   
>
          <div className="container">
            <div className="hero-banner">
              <img
                src={home}
                alt="Online Assessment"
                className="img-cover"
                style={{ top:'50px' }}
              />
            </div>
            <div className="hero-content">
              <h2 className="hero-title">
                <span>Welcome to "AssessPro"</span>
                <strong></strong> The Ultimate Online Assessment Solution
              </h2>
              <p className="hero-text">
                Secure, Efficient, and Reliable Proctored Exams for Educational and
                Professional Certifications.
              </p>
              <div className="btn-group">
                <a href="#contact" className="btn btn-primary blue">
                  Request a Demo
                </a>
                <a href="#about" className="btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      

      <section className="section about" id="about">
        <div className="container">
          <figure className="about-banner"style={{ height:'310px' }}>
            <img
              src={about}
              alt="About Us"
              className="img-cover"
              style={{ height:'310px' }}
            />
            <div className="abs-icon abs-icon-1">
              <ion-icon name="laptop-outline"></ion-icon>
            </div>
            <div className="abs-icon abs-icon-2">
              <ion-icon name="shield-checkmark-outline"></ion-icon>
            </div>
            <div className="abs-icon abs-icon-3">
              <ion-icon name="school-outline"></ion-icon>
            </div>
          </figure>
          <div className="about-content">
            <p className="section-subtitle">Online Assessment Platform</p>
            <h2 className="h2 section-title">Trusted by Universities & Companies Worldwide</h2>
            <p className="section-text">
              Our platform delivers secure, efficient, and scalable online
              assessments designed for universities, professional institutions,
              and companies.
            </p>
            <a href="#features" className="btn btn-primary blue">
              Explore Our Features
            </a>
          </div>
        </div>
      </section>


      <section className="section education" style={{ backgroundColor: 'rgba(0, 0, 22, 0.4)' }} id="services">
      <h1 className="heading" style={{ textAlign: 'center' }}>
        Our Services
      </h1>

      <p className="quote" style={{ textAlign: 'center' }}>
        Empowering Your Success with Comprehensive Online Assessment Solutions
      </p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img draggable="false" src={customImg} alt="Customization and Relevance" />
          </div>
          <div className="content">
            <h3>Customization and Relevance</h3>
            <p>
              This platform allows administrators to manually upload custom questions, ensuring assessments are tailored to specific job roles and organizational needs.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={integrityImg} alt="Security and Integrity" />
          </div>
          <div className="content">
            <h3>Security and Integrity</h3>
            <p>
              Advanced AI proctoring monitors candidates in real-time to detect and prevent dishonest behaviors, supporting the integrity of the assessment process. Robust security measures protect candidate data and assessment content.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={supervisionImg} alt="Efficiency and Scalability" />
          </div>
          <div className="content">
            <h3>Efficiency and Scalability</h3>
            <p>
              AI-driven monitoring reduces the need for extensive human supervision, making the process more efficient and scalable. Real-time alerts enable immediate intervention if suspicious activities are detected.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={fairnessImg} alt="Fairness and Accuracy" />
          </div>
          <div className="content">
            <h3>Fairness and Accuracy</h3>
            <p>
              The platform ensures objective evaluation and consistent standards across all candidates, using unbiased AI technologies to uphold the integrity of the examination environment.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={feedbackImg} alt="Comprehensive Feedback" />
          </div>
          <div className="content">
            <h3>Comprehensive Feedback</h3>
            <p>
              Detailed post-assessment reports provide insights into candidate performance and any proctoring flags raised, offering actionable feedback to both candidates and administrators.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section blog" id="solutions"style={{   background: 'linear-gradient(to right, #0072ff, #00c6ff)'  }}>
      <div className="container">
        <p className="section-subtitle">Innovative Solutions</p>
        <h2 className="h2 section-title">Our Solutions</h2>
        <p className="section-text">
          Our solutions bridge the gap between challenges and innovation. Explore how we address critical issues with cutting-edge technologies and approaches.
        </p>

        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src={solution1Img}
                    width="1181"
                    height="843"
                    loading="lazy"
                    alt="Solution 1"
                    className="img-cover"
                  />
                </a>
              </figure>
              <a href="#" className="card-tag">AI Integration</a>
              <h3 className="card-title">
                <a href="https://www.example.com/solution1">Revolutionizing Processes with AI Integration</a>
              </h3>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src={solution2Img}
                    width="1181"
                    height="843"
                    loading="lazy"
                    alt="Solution 2"
                    className="img-cover"
                  />
                </a>
              </figure>
              <a href="#" className="card-tag">Data Analytics</a>
              <h3 className="card-title">
                <a href="https://www.example.com/solution2">Harnessing Data Analytics for Strategic Insights</a>
              </h3>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img
                    src={solution3Img}
                    width="1181"
                    height="843"
                    loading="lazy"
                    alt="Solution 3"
                    className="img-cover"
                  />
                </a>
              </figure>
              <a href="#" className="card-tag">Cloud Solutions</a>
              <h3 className="card-title">
                <a href="https://www.example.com/solution3">Optimizing Operations with Cloud-Based Solutions</a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>


    <section
  className="section portfolio"
  id="features"
  style={{
    background: 'linear-gradient(to right, hsl(30, 100%, 50%), hsl(30, 100%, 75%))',
  }}
>
      <div className="container">
        <p className="section-subtitle">Key Features</p>
        <h2 className="h2 section-title">Platform Highlights</h2>
        <p className="section-text">
          Our online assessment platform boasts a range of advanced features designed to enhance the assessment experience for both administrators and candidates. Explore the key highlights:
        </p>

        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={feature1} width="1181" height="843" loading="lazy" alt="Custom Question Upload" className="img-cover" />
                </a>
              </figure>
              <a href="#" className="card-tag">Custom Question Upload</a>
              <h3 className="card-title">
                <a href="#">Seamless Integration of Custom Questions</a>
              </h3>
              <p className="card-description">Allows manual upload of custom questions in various formats (e.g., multiple-choice, short answer, coding challenges) to tailor assessments to specific needs.</p>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={feature2} width="1181" height="843" loading="lazy" alt="AI-Powered Proctoring" className="img-cover" />
                </a>
              </figure>
              <a href="#" className="card-tag">AI-Powered Proctoring</a>
              <h3 className="card-title">
                <a href="#">Real-Time Monitoring and Alerts</a>
              </h3>
              <p className="card-description">Real-time monitoring to detect suspicious activities (e.g., gaze aversion, unauthorized devices) with automated alerts to administrators.</p>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={feature3} width="1181" height="843" loading="lazy" alt="Security and Data Protection" className="img-cover" />
                </a>
              </figure>
              <a href="#" className="card-tag">Security and Data Protection</a>
              <h3 className="card-title">
                <a href="#">Robust Security Measures</a>
              </h3>
              <p className="card-description">Encryption of candidate data and assessment content, along with strict access control measures to ensure security and privacy.</p>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={feature4} width="1181" height="843" loading="lazy" alt="Scalability and Efficiency" className="img-cover" />
                </a>
              </figure>
              <a href="#" className="card-tag">Scalability and Efficiency</a>
              <h3 className="card-title">
                <a href="#">Handling Large Volumes Efficiently</a>
              </h3>
              <p className="card-description">Automated monitoring and reporting capabilities that handle large volumes of candidates efficiently.</p>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={feature5} width="1181" height="843" loading="lazy" alt="Fairness and Objectivity" className="img-cover" />
                </a>
              </figure>
              <a href="#" className="card-tag">Fairness and Objectivity</a>
              <h3 className="card-title">
                <a href="#">Consistent Evaluation Standards</a>
              </h3>
              <p className="card-description">Unbiased AI technologies for consistent evaluation and a standardized assessment environment for all candidates.</p>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={feature6} width="1181" height="843" loading="lazy" alt="Comprehensive Reporting and Analytics" className="img-cover" />
                </a>
              </figure>
              <a href="#" className="card-tag">Comprehensive Reporting and Analytics</a>
              <h3 className="card-title">
                <a href="#">Detailed Reports and Insights</a>
              </h3>
              <p className="card-description">Detailed post-assessment reports, performance analytics, and data visualization tools to provide actionable insights.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section className="skills-section"
>
        <p className="section-subtitle">Skills and knowledge testing made easy</p>
        <h2 className="h2 section-title">One assessment platform for all your needs</h2>

        <div className="tab-buttons">
          <button onClick={() => showTab('business')} className={activeTab === 'business' ? 'active' : ''}>
            Business
          </button>
          <button onClick={() => showTab('education')} className={activeTab === 'education' ? 'active' : ''}>
            Education
          </button>
        </div>

        {/* Business Content */}
        <div id="business" className={`tab-content ${activeTab === 'business' ? 'active' : ''}`}>
          <div className="skills-grid">
            <div className="skill-card">
              <img src="/recruit.png" alt="Recruitment Icon" />
              <h3>Recruitment</h3>
              <p>Identify real talents without the hassle of time-consuming CV screening</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/emp.png" alt="Employee Assessments Icon" />
              <h3>Employee Assessments</h3>
              <p>Online workforce assessments encourage your employees to grow and cultivate a positive team spirit</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/training.png" alt="Training Icon" />
              <h3>Training</h3>
              <p>Evaluate skills and knowledge in a professional and distraction-free environment</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/sales.png" alt="Sales Training Icon" />
              <h3>Sales Training</h3>
              <p>Boost sales by giving your team the skills they need to interact with customers</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/customer.png" alt="Customer Service Icon" />
              <h3>Customer Service</h3>
              <p>Use customized tests to ensure that employees are meeting customer service standards</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/safety.png" alt="Safety Procedures Icon" />
              <h3>Safety Procedures</h3>
              <p>Build a better work environment while boosting morale and performance</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
          </div>
        </div>

        {/* Education Content */}
        <div id="education" className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
          <div className="skills-grid">
            <div className="skill-card">
              <img src="../assets/images/quiz.png" alt="Quizzes Icon" />
              <h3>Quizzes</h3>
              <p>Engage your remote students or connected classrooms in a way that’s efficient and fun</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/exams.png" alt="Exams Icon" />
              <h3>Exams</h3>
              <p>Test skills and knowledge in a professional and no-distraction environment</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/homework.png" alt="Homework Icon" />
              <h3>Homework</h3>
              <p>Give friendly and interactive after-school assignments</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/competition.png" alt="Competition Icon" />
              <h3>Competition</h3>
              <p>Empower learners, challenge them, and encourage discussions to experience amazing results</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/certificate.png" alt="Certification Icon" />
              <h3>Certification</h3>
              <p>Streamline your certification processes with efficient and easy-to-use online assessment tools</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
            <div className="skill-card">
              <img src="../assets/images/form.png" alt="Formative Assessment Icon" />
              <h3>Formative Assessment</h3>
              <p>Positive motivation, encouraging feedback, and equal opportunities with a new educational approach</p>
              <a href="#" className="learn-more">Learn more</a>
            </div>
          </div>
        </div>
      </section>


      <section className="section skills" id="testimonials" style={{
  background: 'linear-gradient(to right, hsl(120, 100%, 40%), hsl(120, 100%, 75%))',
}}>
      <div className="container">
        <p className="section-subtitle">Testimonials</p>

        <h2 className="h2 section-title">What Our Clients Say</h2>

        <p className="section-text">
          Don’t just take our word for it—here’s what our clients and users have to say about their experience with our online assessment platform. We pride ourselves on delivering exceptional service and reliable technology.
        </p>

        <ul className="testimonials-list">
          <li>
            <div className="testimonial-card">
              <figure className="card-banners">
                <img src={client1} alt="Client Photo" className="img-covers" />
              </figure>
              <h3 className="client-name">Jane Smith</h3>
              <p className="client-position">Academic Coordinator, ABC University</p>
              <blockquote className="testimonial-text">
                “We’ve seen a significant improvement in the reliability and fairness of our exams since adopting this platform. The AI-powered proctoring ensures integrity while the comprehensive analytics give us a clearer picture of student performance.”
              </blockquote>
            </div>
          </li>

          <li>
            <div className="testimonial-card">
              <figure className="card-banners">
                <img src={client2} alt="Client Photo" className="img-covers" />
              </figure>
              <h3 className="client-name">Michael Brown</h3>
              <p className="client-position">Recruitment Specialist, DEF Ltd</p>
              <blockquote className="testimonial-text">
                “The platform’s scalability and efficiency have been game-changers for our recruitment drives. We can handle large volumes of candidates with ease and the real-time monitoring helps us maintain high standards of assessment integrity.”
              </blockquote>
            </div>
          </li>

          <li>
            <div className="testimonial-card">
              <figure className="card-banners">
                <img src={client3} alt="Client Photo" className="img-covers" />
              </figure>
              <h3 className="client-name">John Doe</h3>
              <p className="client-position">HR Manager, XYZ Corp</p>
              <blockquote className="testimonial-text">
                “The online assessment platform transformed our hiring process. The ability to upload custom questions and the real-time AI proctoring have made our assessments more secure and efficient. The detailed reporting also provides invaluable .”
              </blockquote>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section className="section contact" id="contact" style={{
    background: 'linear-gradient(to right, hsl(15, 100%, 70%), hsl(15, 100%, 90%))',}}>
      <div className="container">
        <div className="contact-card">
          <h2 className="h2 section-title">Get in touch <br /> We're here to assist you</h2>
          <div className="wrapper">
            <form action="" method="POST" id="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="contact-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="contact-input"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="contact-input"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="contact-input"
              ></textarea>
              <button type="submit" className="btn-submit">
                Submit Message
              </button>
            </form>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?..."
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>













    </>
  );
}

export default Hero;