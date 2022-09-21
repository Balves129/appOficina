import { Component, OnInit } from '@angular/core';
import { DadosServicosService } from 'src/app/services/dados-servicos.service';

@Component({
  selector: 'app-listagem-servicos',
  templateUrl: './listagem-servicos.page.html',
  styleUrls: ['./listagem-servicos.page.scss'],
})
export class ListagemServicosPage implements OnInit {

  public dadosServicos : any

  constructor(private objDados : DadosServicosService) { 
    this.dadosServicos = objDados.enviarDados() 
  }
  
  ngOnInit() {
  }

}
