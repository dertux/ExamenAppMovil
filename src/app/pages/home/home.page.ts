import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModalUsuarioPage } from '../modal-usuario/modal-usuario.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios : Usuario[] = [];

  constructor(private usuarioService:UsuarioService, private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController) {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(respuesta => {
      console.log(respuesta);
      this.usuarios = respuesta;
    });
  }

  async openDetailUsuario(usuario: any){
    const modal = await this.modalCtrl.create({
      component: ModalUsuarioPage,
      componentProps: {id: usuario.id },
      breakpoints: [0,0.5,0.8,1],
      initialBreakpoint:1
    });
    modal.present();
  }

  async addUsuario(){
    const alert = await this.alertCtrl.create({
      header:'Add usuario',
      inputs:[
        {
          name:'name',
          type:'text',
          placeholder:'Nombre',
        },
        {
          name:'lastname',
          type:'text',
          placeholder:'Apellido',
        },
        {
          name:'gender',
          type:'text',
          placeholder:'Género',
        },
        {
          name:'age',
          type:'number',
          placeholder:'Edad',
        },
        {
          name:'rut',
          type:'text',
          placeholder:'rut',
        },
        {
          name:'phone',
          type:'number',
          placeholder:'número',
        },
        {
          name:'country',
          type:'text',
          placeholder:'país',
        },
        {
          name:'comuna',
          type:'text',
          placeholder:'Comuna',
        },
        {
          name:'email',
          type:'email',
          placeholder:'correo@correo.com',
        },
        {
          name:'image',
          type:'url',
          placeholder:'link image',
        }
       ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          role:'confirm',
          handler:(data) => {
            this.usuarioService.addUsuario(data);
            this.toastPresent('Usuario Agregado');
          }
        }
      ]
    });
    alert.present();
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000
    });
    toast.present();
  }
}
