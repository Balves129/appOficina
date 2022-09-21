import { Component, OnInit } from '@angular/core';
import { DadosProdutosService } from 'src/app/services/dados-produtos.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.page.html',
  styleUrls: ['./listagem-produto.page.scss'],
})
export class ListagemProdutoPage implements OnInit {
  
  public produtos : any


  constructor(private objProdutos: DadosProdutosService) {
    this.produtos = objProdutos.enviarProdutos()
   }

  ngOnInit() {
  }

}
