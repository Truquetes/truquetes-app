import { auth, db } from '../database/firebaseConnection';

//Retorna o nome do usuário logado
export async function getNomeUsuario(setNome) {
  const currentUser = auth.currentUser;

  if (currentUser) {
    const userId = currentUser.uid;

    await db.ref(`users/${userId}/name`).once('value', (snapshot) => {
      if (snapshot.exists()) {
        setNome(snapshot.val());
      } else {
        console.log("Nome não encontrado para o usuário atual.");
      }
    });
  } else {
    console.log("Nenhum usuário foi encontrado.");
  }
}