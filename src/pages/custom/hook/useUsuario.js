import { useState } from "react";
import { recuperarUsuarioPorId } from "../api/usuariosService";

export function useUsuario(id) {
  return useState(recuperarUsuarioPorId(id));
}
