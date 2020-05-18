import { OnDemandPreloadStrategy } from './core/strategies/on-demand-preload-strategy';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(mod => mod.AboutModule)
    // O código abaixo quando adicionado é feito o préload do módulo mesmo que o usuário não passe o mouse sobre o link
    // data: { preload: true }
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/form/form.module').then(mod => mod.FormModule),
    // O código abaixo quando adicionado é feito o préload do módulo mesmo que o usuário não passe o mouse sobre o link
    // data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: OnDemandPreloadStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
