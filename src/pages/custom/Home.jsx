import React from "react";
import Amigo from "./components/Amigo";
import Welcome from "./components/Welcome";
import { useUsuario } from "./hook/useUsuario";

// import { Container } from './styles';

function Home() {
  const idUsuario = 3;
  //   const [usuario, setUsuario] = useState({});

  //   useEffect(() => {
  //     setUsuario(recuperarUsuarioPorId(idUsuario));
  //   }, [usuario]);

  const [usuario] = useUsuario(idUsuario);

  return (
    <main style={{ padding: "20px" }}>
      <Welcome usuario={usuario} />

      <ul>
        {usuario.amigos?.map((id) => (
          <Amigo id={id} />
        ))}
      </ul>
    </main>
  );
}

export default Home;
