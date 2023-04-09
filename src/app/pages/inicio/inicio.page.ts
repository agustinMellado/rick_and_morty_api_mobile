import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  chracters:any[]=[];
  params={} as any;
  constructor(private rickAndMortySvc:RickAndMortyService) {

   }

  ngOnInit() {
    this.params.page=0;
  }
  //Obtener personaje

}
