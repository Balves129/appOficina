import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemProdutoPage } from './listagem-produto.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemProdutoPageRoutingModule {}
