import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listagem-servicos',
    loadChildren: () => import('./pages/listagem-servicos/listagem-servicos.module').then( m => m.ListagemServicosPageModule)
  },
  {
    path: 'detalhes-servicos/:id',
    loadChildren: () => import('./pages/detalhes-servicos/detalhes-servicos.module').then( m => m.DetalhesServicosPageModule)
  },
  {
    path: 'listagem-produto',
    loadChildren: () => import('./produtos/listagem-produto/listagem-produto.module').then( m => m.ListagemProdutoPageModule)
  },
  {
    path: 'detalhes-produtos/:id',
    loadChildren: () => import('./produtos/detalhes-produtos/detalhes-produtos.module').then( m => m.DetalhesProdutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
