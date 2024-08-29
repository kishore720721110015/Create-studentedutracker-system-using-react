import React, { useState, useEffect } from 'react';
import './student.css';
import image from './image/logo.png';

function Dashboard() {
  const [regularStudents, setRegularStudents] = useState(0);
  const [remedialStudents, setRemedialStudents] = useState(0);
  const [paidClubStudents, setPaidClubStudents] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      
      const data = {
        regularStudents: 8,
        remedialStudents: 13,
        paidClubStudents: 0,
      };
      
      setRegularStudents(data.regularStudents);
      setRemedialStudents(data.remedialStudents);
      setPaidClubStudents(data.paidClubStudents);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={image} alt="Logo" />
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li><i class="fa-solid fa-user-group"></i> Student Management</li>
            <li><i class="fa-regular fa-chart-bar"></i> Financial Management</li>
            <li><i class="fa-solid fa-medal"></i> Quality Control</li>
            <li><i class="fa-solid fa-compact-disc"></i> Report Delivery</li>
            <li><i class="fa-solid fa-clipboard-user"></i> Attendance</li>
          </ul>
        </nav>
        <div className="settings">
          <ul>
            <li><i class="fa-solid fa-handshake-angle"></i> Help</li>
            <li><i class="fa-solid fa-gear"></i> Settings</li>
          </ul>
        </div>
      </aside>
      <main className="main-content">
      <div class="head">
          <h1>Student Management</h1>
          </div>
        <header className="header">
          <div className="summary">
            <div className="summary-item red">
              <p><i class="fa-regular fa-user"></i> Regular Students</p>
              <span>{regularStudents}</span>
            </div>
            <div className="summary-item purple">
              <p><i class="fa-solid fa-user-check"></i> Remedial Students</p>
              <span>{remedialStudents}</span>
            </div>
            <div className="summary-item green">
              <p><i class="fa-solid fa-child-reaching"></i> In Paid Clubs</p>
              <span>{paidClubStudents}</span>
            </div>
          </div>
        </header>
        <section className="menu">
          <div className="menu-item"><i class="fa-solid fa-user-tie"></i> Regular Enrollment</div>
          <div className="menu-item"><i class="fa-solid fa-book"></i> Remedial Enrollment</div>
          <div className="menu-item"><i class="fa-solid fa-person-circle-check"></i> Club Management</div>
          <div className="menu-item"><i class="fa-solid fa-graduation-cap"></i> Classroom Management</div>
          <div className="menu-item"><i class="fa-solid fa-envelope"></i> SMS / EMAIL</div>
          <div className="menu-item"><i class="fa-solid fa-clipboard-user"></i> Attendance</div>
          <div className="menu-item"><i class="fa-solid fa-house-chimney-medical"></i> Clinic</div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
