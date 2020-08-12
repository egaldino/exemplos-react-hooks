import React from "react";
import { useUsuario } from "../hook/useUsuario";

// import { Container } from './styles';

function Amigo({ id }) {
  //   const [usuario, setUsuario] = useState(null);

  //   useEffect(() => {
  //     setUsuario(recuperarUsuarioPorId(id));
  //   }, [id]);

  const [usuario] = useUsuario(id);

  return <li key={id}>{usuario?.nome}</li>;
}

export default Amigo;
