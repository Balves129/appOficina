import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosServicosService } from 'src/app/services/dados-servicos.service';

@Component({
  selector: 'app-detalhes-servicos',
  templateUrl: './detalhes-servicos.page.html',
  styleUrls: ['./detalhes-servicos.page.scss'],
})
export class DetalhesServicosPage implements OnInit {

  public dadoSelecionado : any
  public Edicao = false

  constructor(
    private objDados : DadosServicosService,
    private route : ActivatedRoute)
     { }

  iniciarEdicao(){
    this.Edicao = true
  }

  encerrarEdicao(){
    this.Edicao = false
  }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))

    this.dadoSelecionado = this.objDados.filtrarDadosid(id)
  }

}
