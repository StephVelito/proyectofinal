import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { getProfile } from "../../services";



const Profile = () => {
  const { user: userContext } = useContext(AuthContext);

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await getProfile();

    setUser({
      ...response,
      ...userContext,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div
      className="container"
      style={{
        maxWidth: "500px",
      }}
    >
      <div className="d-flex justify-content-center mt-3">
        <div className="row">
          <div className="col-12">
            <h6 className="text-gray">Editar perfil</h6>
          </div>
          <div className="col-12 mt-3">
            {user && (
              <div className="row d-flex">
                <div className="col-12 mb-5 text-center">
                  <img
                    src={user.avatar_url}
                    className="rounded-circle"
                    width={100}
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.name}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="">Nombre de usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.login}
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={user.email}
                    className="form-control"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Nombre del Paciente</label>
                  <input
                    type="text"
                    value={user.pet}
                    className="form-control"
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Raza</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.raza}
                  />
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="">Edad</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.edad}
                  />
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="">Distrito</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.location}
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={user.password}
                  />
                </div>
                <div className="col-12 mt-3 d-flex gap-2">
                <Button
                component={Link}
                to="/"
                >
                 Guardar
                 </Button>
                <button className="btn btn-danger">Cerrar session</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;