import React, { useState } from 'react';
import './dashboard.css'; // Importando o CSS responsivo

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      {/* Menu Lateral */}
      <div className="sidebar">
        <h3>Menu</h3>
        <ul>
          <li onClick={handleOptionClick} className="menu-item">Opção 1</li>
          <li onClick={handleOptionClick} className="menu-item">Opção 2</li>
        </ul>
      </div>

      {/* Conteúdo */}
      <div className="content">
        <h2>Dashboard</h2>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Modal Aberto</h3>
            <p>Conteúdo do Modal</p>
            <button onClick={closeModal}>Fechar Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;