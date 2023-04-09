import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
})
export class InicioPage implements OnInit {
  characters: any[] = [];
  params = {} as any;
  constructor(private rickAndMortySvc: RickAndMortyService) {}

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }
  //Obtener personaje
  getCharacters(event?: any) {
    //cada vez que se ejecute la funcion sumamos 1.
    this.params.page += 1;
    this.rickAndMortySvc.getCharacter(this.params).subscribe({
      next: (res: any) => {
        //espero la respuesta de la api.
        this.characters.push(...res.results); //como es arreglo y necesito sacar todos, aplico spread Operator
        console.log(this.characters);
        //Si existe un evento
        if (event) event.target.complete(); //que lo marque como evento completado, para mostrar los personajes
      },
      error: (error: any) => {
        //Si existe un evento
        if (event) event.target.complete(); //que lo marque como evento completado, para mostrar los personajes
      },
    });
  }
}
