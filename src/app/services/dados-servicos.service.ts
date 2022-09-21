import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosServicosService {
  private todosServicos = [
    {id: 1, nome: "Alinhamento", valor: 69.99},
    {id: 2, nome: "Balanceamento", valor: 59.99},
    {id: 3, nome: "Troca de Oleo", valor: 119.99},
    {id: 4, nome: "Troca de pneu", valor: 99.99}

  ]

  constructor() { }

  enviarDados(){
    return this.todosServicos
  }

  filtrarDadosid(id : number){
    const servicoSelecionado = this.todosServicos.filter(servico => servico.id === id)
    return servicoSelecionado[0]

  }
}
