import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class DetallePersonajePage implements OnInit {
  personajeId: String= '';
  constructor(private actRoute:ActivatedRoute) {
    this.personajeId = this.actRoute.snapshot.paramMap.get('id') as String;
   }

  ngOnInit() {
  }

}
