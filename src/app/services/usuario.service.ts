import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Photo } from '@capacitor/camera';
import { Auth } from '@angular/fire/auth';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore:Firestore, private auth: Auth, private storage: Storage) { }

  getUsuarios(): Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, {idField:'id'}) as Observable<Usuario[]>;
  }

  getUsuarioById(id:string): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `usuarios/${id}`);
    return docData(usuarioDocRef, { idField:'id' }) as Observable<Usuario>;
  }

  addUsuario(usuario: Usuario){
    const usuariosRef = collection(this.firestore, 'usuarios');
    return addDoc(usuariosRef, usuario);
  }

  updateUsuario(usuario: Usuario){
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return updateDoc(usuarioRef, 
      {
       name: usuario.name,
       lastname: usuario.lastname,
       gender: usuario.gender,
       email: usuario.email,
       age: usuario.age,
       rut: usuario.rut,
       phone: usuario.phone,
       country: usuario.country,
       comuna: usuario.comuna,
       image: usuario.image 
      });
  }

  deleteUsuario(usuario:Usuario){
    const usuarioRef = doc(this.firestore,`usuarios/${usuario.id}`);
    return deleteDoc(usuarioRef);
  }

  /*async Getavatar(cameraFile:Photo){
    const path = uploads/${user.uid}/profile.png;
    const storageRef = ref(this.storage,path);
      await uploadString(storageRef,cameraFile.base64String || '', 'base64');

      const imageUrl = await Promise.resolve(getDownloadURL(storageRef));
      const imagen: string =imageUrl;
      return imagen;

  }*/

}
