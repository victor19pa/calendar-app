import { useNavigate } from 'react-router-dom';
import './auth.css';

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-8 login-form-1">
          <h3>Ingreso</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>
            <button className='btnRegister btn btn-danger' onClick={handleRegister}>
              Registro
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen