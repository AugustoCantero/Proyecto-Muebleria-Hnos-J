import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState(initialFormState);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [dataForm]);

  const register = async (e) => {
    e.preventDefault();
    if (
      dataForm.username === "" ||
      dataForm.email === "" ||
      dataForm.password === ""
    ) {
      setError(true);
      return;
    }
    try {
      const response = await fetch("https://proyecto-muebleria-hnos-j-1.onrender.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        throw new Error("Error en el registro");
      }
      const result = await response.json();
      console.log("Usuario registrado:", result);
      navigate("/login");
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <section className="auth-page">
      <h1 className="auth-title">Crear cuenta</h1>

      <form className="auth-form" onSubmit={register}>
        <div className="form-group">
          <label>Nombre de usuario</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={dataForm.username}
            onChange={(e) =>
              setDataForm({ ...dataForm, username: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="ejemplo@mail.com"
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

        <button className="auth-btn" type="submit">
          Crear cuenta
        </button>
      </form>
    </section>
  );
}
