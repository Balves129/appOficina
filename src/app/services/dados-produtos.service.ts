import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutosService {
  private todosProdutos = [
    {id: 1, nome: "Iphone 13 pro max", valor: 3129.99},
    {id: 2, nome: "android galaxy s10", valor: 519.99},
    {id: 3, nome: "LG K40S", valor: 599.99},
    {id: 4, nome: "Xiomi mi9", valor: 2099.99}

  ]

  constructor() { }

  enviarProdutos(){
    return this.todosProdutos
  }

  filtrarProdutosid(id: number){
    const produtoSelecionado = this.todosProdutos.filter(produto => produto.id === id)
    return produtoSelecionado[0]
  }
  
  recebeDados(dadosRecebidos: any){
    dadosRecebidos.id = this.todosProdutos.length + 1
    this.todosProdutos.push(dadosRecebidos)
  }
  removeDados(dadosRecebidos: any){
    const index = this.todosProdutos.indexOf(dadosRecebidos)
    this.todosProdutos.splice(index, 1)
    
  }
}
