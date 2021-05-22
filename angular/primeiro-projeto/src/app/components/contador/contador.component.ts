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
      nome: "Ivonaldo",
      sobrenome: "Soares",
      cargo: "Instrutor"
    },
    {
      nome: "Andre",
      sobrenome: "Patricio",
      cargo: "Instrutor"
    },
    {
      nome: "Ana",
      sobrenome: "Maria",
      cargo: "Apresentadora"
    },
    {
      nome: "Silvio",
      sobrenome: "Santos",
      cargo: "Empreendedor"
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