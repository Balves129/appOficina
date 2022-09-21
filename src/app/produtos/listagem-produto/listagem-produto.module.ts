import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemProdutoPageRoutingModule } from './listagem-produto-routing.module';

import { ListagemProdutoPage } from './listagem-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemProdutoPageRoutingModule
  ],
  declarations: [ListagemProdutoPage]
})
export class ListagemProdutoPageModule {}
