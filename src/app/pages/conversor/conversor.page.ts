import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { MindicatorapiService } from 'src/app/services/minindicatorapi.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  //getdata podra ser reemplazado a partir de una lista
getdata:any[]=[];

//declarar variables a utilizar para el conversor las cuales serán reemplazadas (any)
indicadores: any;
UF: any;
Dolar: any;
Euro: any ;
CLP: number = 0;
respuestaCarga: boolean=false;
conversion: number = 0;

  //importar mindicatorapiservice, y navcontroller
  constructor(public mindicatorapiService: MindicatorapiService, private navController: NavController) {}


  ngOnInit(): void {
    this.cargarUf();
  }

  async cargarUf(cargarmasUf:boolean = false){

    await this.mindicatorapiService.getIndicadores()
    .then(respuesta => {
      this.indicadores = respuesta;
      this.UF = respuesta.uf;
      this.Dolar = respuesta.dolar;
      this.Euro = respuesta.euro;
      
      this.respuestaCarga = true;
    },
    (err) => {
      console.log(err);
    });
  }


  //metodo para convertir los pesos chilenos a euros
  ConvertirEuro() {
    
    this.conversion = this.CLP/parseFloat(this.Euro.valor)
    
  }
  //metodo para convertir los pesos chilenos a dolares
  ConvertirDolar() {
    
    this.conversion = this.CLP/parseFloat(this.Dolar.valor)

  }

  //metodo para el botón limpiar
  limpiarCampo(){
    this.conversion = 0;
    this.CLP = 0;
  }

}
