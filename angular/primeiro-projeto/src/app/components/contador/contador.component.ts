import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador = 0;
  text = '';

  pessoas = [
    {
      nome: "Ingrid",
      sobrenome: "Melo",
      cargo: "Programadora fullstack"
    },
    {
      nome: "Roberta",
      sobrenome: "Cintra",
      cargo: "Dev front-end"
    },
    {
      nome: "Serena",
      sobrenome: "BM",
      cargo: "Cachorra"
    },
    {
      nome: "Gato",
      sobrenome: "Gato",
      cargo: "Gato"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(): void {
    this.contador++;
    console.log('O usuario clicou no botao');
  }

  decrementa(): void {
    this.contador--;
  }
}