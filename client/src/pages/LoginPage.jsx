import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const initialFormState = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [dataForm, setDataForm] = useState(initialFormState);
  const [error, setError] = useState(false);

  const [credencialesIncorrectas, setCredencialesIncorrectas] = useState(false);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  
  useEffect(() => {
    setError(false);
    setCredencialesIncorrectas(false);
  }, [dataForm]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (dataForm.email === "" || dataForm.password === "") {
      setError(true);
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForm),
        }
      );

      if (!response.ok) {
        if (response.status === 400) {
          setCredencialesIncorrectas(true);
        }
        throw new Error("Error en el login");
      }
      const result = await response.json();
      login(result.token);
      navigate("/admin/perfil", { replace: true });
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };
  return (
    <section className="login-page">
      <h1 className="login-title">Iniciar Sesión</h1>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="tu email"
            value={dataForm.email}
            onChange={(e) =>
              setDataForm({ ...dataForm, email: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="******"
            value={dataForm.password}
            onChange={(e) =>
              setDataForm({ ...dataForm, password: e.target.value })
            }
          />
        </div>

        {error && (
          <p className="error-text">Por favor completa todos los campos.</p>
        )}
        {credencialesIncorrectas && (
          <p className="error-text">Credenciales incorrectas.</p>
        )}

        <button className="login-btn" type="submit">
          Iniciar sesión
        </button>
      </form>
    </section>
  );
}
