const usuarios = [
  { id: 0, nome: "Fulano", online: false, amigos: [1, 2, 3] },
  { id: 1, nome: "Siclano", online: true, amigos: [0, 2, 3] },
  { id: 2, nome: "Beltrano", online: false, amigos: [0, 1, 3] },
  { id: 3, nome: "Edson", online: true, amigos: [0, 1, 2] },
];

export function recuperarUsuarioPorId(id) {
  return usuarios.filter((usuario) => usuario.id === id)[0];
}
