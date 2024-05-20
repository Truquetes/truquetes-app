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

//Realiza o cadastro do usuário
export async function register(name, email, password, navigation) {
  //Valida se o nome é vazio
  if (name === '') {
      alert('O nome deve ser informado');
      return;
  }

  //Faz o cadastro do usuário 
  await auth.createUserWithEmailAndPassword(email, password)
    .then((value) => {
      db.ref('users').child(value.user.uid).set({
        name: name
    });

      //Informa que o cadastro foi realizado e navega para tela principal
      alert('Usuário cadastrado com sucesso!');
      navigation.navigate('Main');
    }).catch((error) => {
      //Faz os tratamentos de erros específicos do auth do firebase
      switch (error.code) {
          case "auth/email-already-in-use":
              alert('O endereço de e-mail fornecido já está em uso!');
              break;
          case "auth/invalid-email":
              alert('O endereço de e-mail fornecido é inválido!');
              break;
          case "auth/weak-password":
              alert('A senha fornecida é muito fraca! A senha deve conter mais de 6 caracteres.');
              break;
          case "auth/network-request-failed":
              alert('Aconteceu um problema de conexão ao tentar cadastrar o novo usuário!');
              break;
          default:
              alert('Aconteceu um erro inesperado ao realizar o cadastro! Contate o Admin do sistema!');
              console.log(error);
              break;
        }
    });
}