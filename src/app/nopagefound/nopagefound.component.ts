import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css']
})
export class NopagefoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getPage(error: string) {
    return `No se puedo encontrar la pagina: error ${error}`;
  }

}
