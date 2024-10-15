import React, { useState } from 'react';
import './dashboard.css'; 

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
    
      <aside className="sidebar">
        <ul>
          <li onClick={handleOptionClick}>Opção 1</li>
          <li onClick={handleOptionClick}>Opção 2</li>
          <li onClick={handleOptionClick}>Opção 3</li>
          <li onClick={handleOptionClick}>Opção 4</li>
          <li onClick={handleOptionClick}>Opção 5</li>
        </ul>
      </aside>

     
      <main className="main-content">
        <h1>Bem-vindo ao Dashboard</h1>
        <p>Selecione uma opção à esquerda para abrir um modal.</p>
      </main>

    
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Modal Aberto</h2>
            <p>Conteúdo do modal.</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;