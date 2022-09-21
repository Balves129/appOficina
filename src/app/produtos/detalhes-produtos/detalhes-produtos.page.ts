import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosProdutosService } from 'src/app/services/dados-produtos.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.page.html',
  styleUrls: ['./detalhes-produtos.page.scss'],
})
export class DetalhesProdutosPage implements OnInit {

 
  public prodSelecionado: any
  public modoDeEdicao = false

  constructor( 
    private prodDados: DadosProdutosService,
    private route: ActivatedRoute)
    {}
    
    iniciarEdicao(){
      this.modoDeEdicao = true
    }

    encerrarEdicao(){
      const id : number = Number(this.route.snapshot.paramMap.get('id'))
      if(id > 0){
        
        this.modoDeEdicao =  false
      } else{
        this.prodDados.recebeDados(this.prodSelecionado)
        this.modoDeEdicao = false
      }
      
    }
    deletar(){
      const id: number = Number(this.route.snapshot.paramMap.get('id'))
      this.prodSelecionado = this.prodDados.filtrarProdutosid(id)
      this.prodDados.removeDados(this.prodSelecionado)
    }

  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'))

    
    if(id > 0){
      this.prodSelecionado = this.prodDados.filtrarProdutosid(id)
    }else{
      this.prodSelecionado = {id, nome:"", valor: 0.0}
    this.modoDeEdicao = true
 
    }
     }

}
