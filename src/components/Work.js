
import React, { useState, useEffect } from 'react';
import './Work.css';

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    image: "Portfolio.png",
    date: "2025",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    shortDesc: "A fully responsive personal portfolio built with React, showcasing projects and skills.",
    fullDesc: "A fully responsive personal portfolio built with React, showcasing projects and skills with smooth navigation, clean design, and custom interactivity. Reflects my skills in front-end design and responsive web development."
  },
  {
    id: 2,
    title: "Weather Website",
    image: "Weather_project.png",
    date: "September 9, 2025",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    shortDesc: "A website that displays real-time weather data for any city using a public API.",
    fullDesc: "A website that displays real-time weather data for any city using a public API. Built with HTML, CSS, and JavaScript, it features a clean, minimal interface and dynamic updates. Strengthened skills in API integration and responsive design."
  },
  {
    id: 3,
    title: "Todo List App",
    image: "To-Do-list.png",
    date: "August 27, 2025",
    tech: ["React", "Hooks", "Component Architecture"],
    shortDesc: "A simple yet functional productivity tool to organize daily tasks.",
    fullDesc: "A simple yet functional productivity tool to organize daily tasks. Developed with HTML, CSS, and JavaScript, it supports adding, editing, marking, and deleting tasks. This project improved my understanding of DOM manipulation and local storage for persistent data."
  },
  {
    id: 4,
    title: "CRUD App",
    image: "CRUD.png",
    date: "August 11, 2025",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    shortDesc: "A web application that demonstrates full Create, Read, Update, and Delete functionality.",
    fullDesc: "A web application that demonstrates full Create, Read, Update, and Delete functionality for managing data records. Built with HTML, CSS, and JavaScript, it stores information locally using the browser's localStorage. This project helped me understand data manipulation, dynamic UI updates, and core CRUD operations without a backend."
  },
  {
    id: 5,
    title: "Smart Agriculture IoT System",
    image: "sahla_farm.png",
    images: ["sahla_farm.png", "sahla_2.png", "sahla_3.png", "sahla_4.png", "sahla_5.png"],
    date: "2026",
    tech: ["WebSocket", "React", "Home Assistant", "ESP32", "MQTT", "n8n", "Tuya", "Nodejs"],
    shortDesc: "A team project of 6 members — we built a website & mobile app that connects to Home Assistant with real-time WebSocket exchange.",
    fullDesc: "A team project of 6 members — we built a website & mobile app that connects to Home Assistant with real-time WebSocket exchange. The system automates greenhouse irrigation, ventilation, and lighting using ESP32 sensors (DHT22, capacitive), live ESP32-CAM surveillance, n8n workflow automation, and Tuya smart plug control.\n\nI implemented a Personalised Dashboard in Home Assistant, integrating real-time telemetry (temperature, humidity, soil moisture, ambient light), historical data graphs, crop growth stage settings, and direct actuators controls for automated fans and water pumps."
  }
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (activeProject && activeProject.images) {
      setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeProject && activeProject.images) {
      setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
    }
  };

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <div id='work' className="work_section">
      <h1 className='title'>work.</h1>
      <div className='description'>
        Here are some of the projects I've built — spanning IoT systems, React web apps,
        data structures, and front-end development. Each reflects my approach to clean,
        functional, and user-centered engineering.
      </div>
      <div className='detailes'>
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className='work-info' 
            onClick={() => openProject(project)}
            title="Click to view full details"
          >
            <h3>{project.title}</h3>
            <img 
              className='photo-work' 
              src={project.image} 
              style={{ width: "100%" }} 
              alt={project.title}
            />
            <div className='date'>
              {project.date} &nbsp;·&nbsp; {project.tech.slice(0, 3).join(' · ')}{project.tech.length > 3 ? '...' : ''}
            </div>
            <p className='detailes-photo'>
              {project.shortDesc}
            </p>
            <div className='read-more-btn'>
              View Details →
            </div>
          </div>
        ))}
      </div>

      {/* ── PROJECT DETAILS MODAL ── */}
      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>&times;</button>
            <div className="modal-image-wrapper">
              <img className="modal-image" src={activeProject.images ? activeProject.images[currentImageIndex] : activeProject.image} alt={activeProject.title} />
              {activeProject.images && activeProject.images.length > 1 && (
                <>
                  <button className="slider-btn prev" onClick={prevImage}>&#10094;</button>
                  <button className="slider-btn next" onClick={nextImage}>&#10095;</button>
                  <div className="slider-dots">
                    {activeProject.images.map((_, idx) => (
                      <span key={idx} className={`dot ${idx === currentImageIndex ? 'active' : ''}`} onClick={() => setCurrentImageIndex(idx)}></span>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="modal-body">
              <div className="modal-meta">
                <span className="modal-date">{activeProject.date}</span>
              </div>
              <h2 className="modal-title">{activeProject.title}</h2>
              <div className="modal-tech-stack">
                {activeProject.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="modal-description">
                {activeProject.fullDesc.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}