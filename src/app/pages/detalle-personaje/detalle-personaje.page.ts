import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
})
export class DetallePersonajePage implements OnInit {
  personajeId: string = ''; //variable que va a almacenar informacion del personaje.
  personaje=null as any; //variable para trabajar con lo que me devuelve el servicio.
  episodio:any []=[]; //variable array para almacenar los episodios.
  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService
  ) {
    //inyector para tomar los valores del id
    this.personajeId = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log(this.personajeId);
  }

  ngOnInit() {}
  ionViewWillEnter(){
    this.getCharacter()
  }

  //Obtiene el personaje de
  getCharacter(){

    this.rickAndMortySvc.getCharacterById(this.personajeId).subscribe({
      
      next: (res: any) => {
        console.log(res);
        this.personaje = res;
        //Busca los episodios donde aparece el personaje
        this.getEpisodio()
      },
      error: (error: any) => {
        console.log();
      }
    })
  }
  getEpisodio(){
    for(let url of this.personaje.episode){
      this.rickAndMortySvc.getByUrl(url).subscribe({
      
        next: (res: any) => {
          console.log(res)
          this.episodio.push(res);
        },
        error: (error: any) => {
          console.log();
        }
      })
    }
    
  }
}
