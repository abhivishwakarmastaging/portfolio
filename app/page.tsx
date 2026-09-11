'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Smartphone,
  Server,
  X,
  Zap,
} from 'lucide-react';

const skills = [
  'React Native',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'REST APIs',
  'Redux Toolkit',
  'RTK Query',
  'Socket.IO',
  'Formik',
  'Yup',
  'Mapbox',
  'React Native Maps',
  'SQL Server',
  'MSSQL',
  'Git',
  'Android',
];

const projects = [
  {
    number: '01',
    title: 'Vendor App — Logistics Management Platform',
    type: 'React Native · TypeScript · RTK Query · Socket.IO',
    description:
      'Vendor-side logistics application supporting transportation operations, vehicle management, load workflows, authentication, and business process automation with real-time operational updates.',
    stack: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'Socket.IO',
      'Node.js',
      'MSSQL',
    ],
  },
  {
    number: '02',
    title: 'TrackerX — Logistics Tracking Application',
    type: 'React Native · Redux Toolkit · RTK Query',
    description:
      'Modules for AWB booking, branch operations, manifest management, shipment tracking, and MIS reporting with user-based permissions, delivery workflows, and digital signature capture.',
    stack: [
      'React Native',
      'Redux Toolkit',
      'RTK Query',
      'React Navigation',
      'REST APIs',
    ],
  },
  {
    number: '03',
    title: 'Driver App — Logistics Operations Application',
    type: 'React Native · Redux · Socket.IO',
    description:
      'Driver workflows including Report In, Vehicle In, Load In, Load Out, Vehicle Out, Trip Start, and Trip Close with real-time status updates and operational tracking.',
    stack: [
      'React Native',
      'Redux',
      'REST APIs',
      'Socket.IO',
    ],
  },
  {
    number: '04',
    title: 'Node.js API Development',
    type: 'Node.js · Express.js · SQL Server',
    description:
      'RESTful APIs and backend services integrated with SQL Server for internal and production applications, including database-driven business logic using queries and stored procedures.',
    stack: [
      'Node.js',
      'Express.js',
      'SQL Server',
      'REST APIs',
      'Stored Procedures',
    ],
  },
];

const experience = [
  {
    company: 'MotoHelp Pvt. Ltd.',
    role: 'Software Developer',
    location: 'Mumbai, Maharashtra',
    period: 'Feb 2025 – Present',
    bullets: [
      'Develop and maintain production-grade logistics applications using React Native, TypeScript, Redux Toolkit, RTK Query, Node.js, REST APIs, and SQL Server.',
      'Developed vendor-side workflows for transportation operations, including load management, vehicle management, tracking, authentication, and business process automation.',
      'Implemented scalable application architecture using reusable components, centralized state management, API abstraction, and modular feature-based development.',
      'Integrated REST APIs and Socket.IO for real-time communication and live operational updates across mobile applications.',
      'Implemented form validation and business workflows using Formik and Yup while maintaining consistent and reusable UI components.',
      'Improved application performance by reducing unnecessary re-renders and optimizing event handlers using techniques such as useCallback, debouncing, and efficient state management.',
      'Collaborated with backend and QA teams to troubleshoot production issues, integrate APIs, test features, and deliver business-critical functionality.',
      'Worked with SQL Server and stored procedures for data retrieval, business logic, reporting, and application workflows.',
    ],
  },
  {
    company: 'Neotech IT Services',
    role: 'React Native Developer',
    location: 'Mumbai, Maharashtra',
    period: 'Jan 2024 – Jan 2025',
    bullets: [
      'Developed and maintained logistics mobile applications using React Native, JavaScript, Redux Toolkit, React Navigation, and REST APIs.',
      'Built reusable UI components and application modules while maintaining responsive layouts and consistent user experiences.',
      'Integrated Node.js APIs with SQL Server for operational workflows, data management, and business functionality.',
      'Implemented application navigation, user-based permissions, API integrations, and workflow-driven screens.',
      'Collaborated with QA and backend teams to identify, debug, and resolve application issues throughout the development lifecycle.',
      'Participated in production support, feature enhancements, bug fixing, and application performance improvements.',
    ],
  },
  {
    company: 'Neotech IT Services',
    role: 'Web Developer & API Developer',
    location: 'Mumbai, Maharashtra',
    period: 'Jan 2021 – Dec 2023',
    bullets: [
      'Developed and maintained web applications using JavaScript, HTML5, CSS3, and responsive web development practices.',
      'Designed and developed RESTful APIs using Node.js and integrated backend services with Microsoft SQL Server.',
      'Created and optimized SQL queries and stored procedures for application functionality and data processing.',
      'Troubleshot production issues across frontend, backend, database, and deployment environments.',
      'Managed application deployment and hosting on IIS, including server configuration, application updates, and production releases.',
      'Worked with development and support teams to analyze requirements, implement features, and resolve application issues.',
    ],
  },
];

const mobileCapabilities = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Production React Native applications, reusable components, navigation, forms, maps and Android workflows.',
  },
  {
    icon: Server,
    title: 'Node.js Backend',
    description:
      'REST APIs, Express.js services, authentication flows, file uploads, integrations and backend business logic.',
  },
  {
    icon: Database,
    title: 'Database & APIs',
    description:
      'SQL Server, MSSQL queries, stored procedures, API integration and application-level data workflows.',
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    closeMenu();
  };

  return (
    <main>
      {/* HEADER */}

      <header className="site-header">
        <div className="container nav-wrap">
          <button
            className="brand"
            onClick={() => scrollTo('home')}
            aria-label="Go to top"
          >
            AV<span>.</span>
          </button>

          <nav className={open ? 'nav open' : 'nav'}>
            {[
              'about',
              'experience',
              'projects',
              'skills',
              'contact',
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="hero section" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot"></span>
              Open to React Native opportunities
            </div>

            <p className="eyebrow">
              React Native Developer · TypeScript · Node.js
            </p>

            <h1>
              Building production mobile apps that solve real
              business problems.
            </h1>

            <p className="hero-text">
              I&apos;m Abhishek Vishwakarma, a software developer with
              5+ years of experience building and maintaining
              production web and mobile applications, with strong
              expertise in React Native, TypeScript, Node.js, REST
              APIs, real-time communication and SQL Server.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View my work
                <ArrowUpRight size={18} />
              </a>

              <a
                className="btn secondary"
                href="/Abhishek_Vishwakarma_Resume.pdf"
                download
              >
                Download resume
                <Download size={17} />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={16} />
                Mumbai, India
              </span>

              <span>
                <BriefcaseBusiness size={16} />
                Software Developer
              </span>
            </div>
          </div>

          <div className="hero-card">
            <div className="developer-card">
              <div className="developer-card-header">
                <div className="profile-mark">AV</div>

                <div>
                  <strong>Abhishek Vishwakarma</strong>
                  <span>React Native Developer</span>
                </div>
              </div>

              <div className="tech-list">
                <div>
                  <span>Mobile</span>
                  <strong>React Native</strong>
                </div>

                <div>
                  <span>Language</span>
                  <strong>TypeScript</strong>
                </div>

                <div>
                  <span>Backend</span>
                  <strong>Node.js</strong>
                </div>

                <div>
                  <span>Database</span>
                  <strong>SQL Server</strong>
                </div>

                <div>
                  <span>Real-time</span>
                  <strong>Socket.IO</strong>
                </div>

                <div>
                  <span>Maps</span>
                  <strong>Mapbox</strong>
                </div>
              </div>

              <div className="experience-badge">
                <Zap size={18} />
                <div>
                  <strong>5+ Years Experience</strong>
                  <span>Mobile · API · Database</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="section muted" id="about">
        <div className="container two-col">
          <div>
            <p className="section-label">01 / ABOUT</p>

            <h2>
              Mobile-focused development with backend
              understanding.
            </h2>
          </div>

          <div className="section-copy">
            <p>
              I specialize in building React Native applications
              that connect mobile experiences with real backend
              systems.
            </p>

            <p>
              My experience covers the complete application flow —
              from designing mobile screens and reusable components
              to integrating REST APIs, managing application state,
              implementing real-time communication and working
              with SQL Server databases.
            </p>

            <p>
              My strongest domain experience is logistics and
              transportation, where I have worked on driver,
              vendor, customer and runner applications involving
              onboarding, KYC, vehicles, loads, trips, maps and
              live tracking.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section className="section" id="experience">
        <div className="container">
          <p className="section-label">02 / EXPERIENCE</p>

          <div className="experience-intro">
            <h2>Professional experience</h2>

            <p>
              Building and supporting production applications
              across mobile, backend and database layers.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article
                className="timeline-item"
                key={`${item.company}-${item.role}`}
              >
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <div className="timeline-head">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">
                        {item.company} · {item.location}
                      </p>
                    </div>

                    <span>{item.period}</span>
                  </div>

                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="section muted" id="projects">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">03 / PROJECTS</p>

              <h2>Selected mobile projects</h2>
            </div>

            <p>
              Production-oriented mobile applications built around
              real operational requirements.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.title}
              >
                <div className="project-top">
                  <span className="project-index">
                    {project.number}
                  </span>

                  <ArrowUpRight size={20} />
                </div>

                <p className="project-type">
                  {project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tags">
                  {project.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section className="section" id="skills">
        <div className="container">
          <p className="section-label">04 / SKILLS</p>

          <div className="skill-layout">
            <div className="skill-intro">
              <h2>
                The stack I use to build mobile products.
              </h2>

              <p>
                Focused on React Native development, with enough
                backend and database knowledge to work across the
                complete application lifecycle.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-cards">
            {mobileCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="section contact" id="contact">
        <div className="container contact-box">
          <div>
            <p className="section-label">05 / CONTACT</p>

            <h2>
              Looking for a React Native developer?
            </h2>

            <p>
              I&apos;m open to opportunities where I can contribute
              to mobile products, backend integrations and
              production engineering.
            </p>

            <div className="contact-cta">
              <a
                className="btn primary"
                href="mailto:vishwakarmaabhi453@gmail.com"
              >
                Get in touch
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="contact-links">
            <a href="mailto:vishwakarmaabhi453@gmail.com">
              <Mail size={18} />
              <span>
                <small>Email</small>
                vishwakarmaabhi453@gmail.com
              </span>
            </a>

            <a
              href="https://linkedin.com/in/abhishek-vishwakarma-b17a831b4"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              <span>
                <small>LinkedIn</small>
                View LinkedIn profile
              </span>
            </a>

            <a
              href="tel:+917506122183"
            >
              <Smartphone size={18} />
              <span>
                <small>Phone</small>
                +91 75061 22183
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <div className="container footer-wrap">
          <span>
            © {new Date().getFullYear()} Abhishek Vishwakarma
          </span>

          <span>
            React Native · TypeScript · Node.js
          </span>
        </div>
      </footer>
    </main>
  );
}