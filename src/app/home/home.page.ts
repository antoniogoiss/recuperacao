import { Component, OnInit } from '@angular/core';
import { Peca } from '../peca.model';
import { PecasService } from '../pecas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public pecas : Array<Peca>

  constructor(private pecasService: PecasService) {}

  ngOnInit() {
    this.pecas = this.pecasService.getPecas()
  }


}
