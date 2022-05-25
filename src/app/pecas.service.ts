import { Injectable } from '@angular/core';
import { Peca } from './peca.model';

@Injectable({
  providedIn: 'root'
})
export class PecasService {

  public pecas : Array<Peca> = [
    new Peca ("10", "Óleo de motor", "Óleo", "50,00", 30, "Brasil Autopeças"),
    new Peca ("15", "Pneu aro 14", "Pneu", "300,00", 100, "Brasil Autopeças"),
    new Peca ("20", "Palheta de parabrisa", "Palheta", "40,00", 70, "Cambui Autopeças"),
    new Peca ("25", "Bateria de carro", "Bateria", "500,00", 80, "Moura"),
    new Peca ("30", "Chave Inglesa", "Ferramentas", "20,00", 150, "Cambui Autopeças"),
    new Peca ("35", "Chave grifo americana", "Ferramentas", "35,00", 20, "Cambui Autopeças")
  ]

  public getPecas() {
    return this.pecas
  }

  constructor() { }
}
