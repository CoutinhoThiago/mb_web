import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'', component: LoginComponent
  },
  {
    path:'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule),
  },

  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path:'transacoes',
    loadChildren: () => import('./pages/transacoes/transacoes.module').then(m => m.TransacoesModule),
  },
  {
    path:'contas',
    loadChildren: () => import('./pages/contas/contas.module').then(m => m.ContasModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
