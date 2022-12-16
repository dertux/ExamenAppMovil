import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.page.html',
  styleUrls: ['./modal-usuario.page.scss'],
})
export class ModalUsuarioPage implements OnInit {
  @Input()
  id!: string;
  usuario: Usuario = null!;
  pageTitle: string = '';
  constructor(private usuarioService:UsuarioService,private toastCtrl:ToastController,private modalCtrl:ModalController) { 

  }

  ngOnInit() {
    this.getUsuario();
    console.log(this.usuario);
  }

  getUsuario(){
    this.usuarioService.getUsuarioById(this.id).subscribe(respuesta => {
      this.usuario = respuesta;
    });
  }

  //funcion actualizar usuario
  async updateUsuario(){
    this.usuarioService.updateUsuario(this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario actualizado',
      duration:1000,
    });
    toast.present();
  }

  //Funcion borrar usuario
  async deleteUsuario(){
    this.usuarioService.deleteUsuario(this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario eliminado',
      duration:1000,
    })
    toast.present();
  }

 /* async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
      const result = await Promise.resolve(this.usuarioService.Getavatar(avatar));
      this.usuario.image = result;
      console.log(result);
    } */

}
