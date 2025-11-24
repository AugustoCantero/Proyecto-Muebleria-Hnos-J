import { useEffect, useState } from "react";

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function LoginPage() {
  const [dataForm, setDataForm] = useState(initialFormState);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [dataForm]);

  const login = async (e) => {
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
      const response = await fetch("https://proyecto-muebleria-hnos-j-1.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        throw new Error("Error en el login");
      }
      const result = await response.json();
      console.log("Usuario registrado:", result);
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };
  return (
    <section className="login-page">
      <h1 className="login-title">Iniciar Sesión</h1>

      <form className="login-form" onSubmit={login}>
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

        <button className="login-btn" type="submit">
          Iniciar sesión
        </button>
      </form>
    </section>
  );
}
