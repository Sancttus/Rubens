// LoginPage.js
import React, { useState } from 'react';
import './login.css';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        setError('Por favor, preencha todos os campos');
        return;
      }
  
      // Lógica de autenticação pode ser adicionada aqui
      console.log('Email:', email);
      console.log('Password:', password);
      setError('');  // Limpa o erro após o envio
    };
  
    return (
      <div className="box"> 
        <div className="login-container">
        <div className="login-box">
          <div className="login-card">
            <h2>Bem-vindo</h2>
            <p>Faça login na sua conta</p>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login-button">Entrar</button>
            </form>
            <div className="login-footer">
              <a href="#">Esqueceu sua senha?</a>
              <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </div>
          </div>
  
          <div className="image-box">
            <img src='./cachoeiras.jpg' alt="Logo da Empresa" />
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default LoginPage;