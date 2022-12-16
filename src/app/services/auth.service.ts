import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }
  // crear un usuario con email y password
  async register(email:string, password:string ) {  
    try{
      const user = await createUserWithEmailAndPassword(this.auth,email,password);
      return user;
    }catch(error){
      return null;
    }
  }

  //logearse con email y contraseña
  async login(email:string, password:string) {
    try{
      const user = await signInWithEmailAndPassword(this.auth,email,password);
      return user;
    }catch(error){
      return null;
    }
  }

  //salir 
  logout(){
    return signOut(this.auth);
  }






}
