import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Peca } from '../peca.model';
import { PecasService } from '../pecas.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {

  public cod: String
  public peca: Peca = null


  constructor( private route: ActivatedRoute,
    private router: Router,
    private pecasService: PecasService) { }

  ngOnInit() {
    this.cod = this.route.snapshot.paramMap.get('cod')
    let pecas: Array<Peca> = this.pecasService.getPecas()
    for (let i=0; i<pecas.length;i++){
      if(pecas[i].cod === this.cod){
        this.peca = pecas[i]
      }
    }
    if(this.peca === null){
      this.router.navigate(['/pecas'])
    }
  }


}
