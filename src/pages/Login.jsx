import './login.css';
import {Link} from 'react-router-dom'

const LoginPage = () => {

    return (
      <div className="box"> 
        <div className="login-container">
        <div className="login-box">
          <div className="login-card">
            <h2>Bem-vindo</h2>
            <p>Faça login na sua conta</p>          
            <form className="login-form">
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Senha"/>
              <button type="submit" className="login-button">Entrar</button>
            </form>
            <div className="login-footer">
              <Link to='/alzheimer'>Esqueceu sua senha?</Link>
              <Link to='/dashboard'>Dashboard Page</Link>
              <p>Não tem uma conta? <Link to='/error'>Cadastre-se</Link></p>
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