// O objetivo deste arquivo é ter 
// todas as funções relacionadas a autenticação
    // criar usuario com email/senha/nome
    // entrar com google
    // entrar com email/senha
    // logout

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./config";

export async function cadastrarUsuario(nome, email, senha) {
    // Indicamos o serviço de autenticação e o email e senha do novo usuário
    const{ user } = await createUserWithEmailAndPassword(auth, email, senha);
    await updateProfile(user, {displayName: nome} );
}

export async function entrarGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
}

export async function loginUsuario(email, senha) {
    await signInWithEmailAndPassword(auth, email, senha);
}

export async function logout() {
    await signOut(auth);
}