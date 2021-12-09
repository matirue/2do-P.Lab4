import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCriptoComponent } from './pages/add-cripto/components/add-cripto/add-cripto.component';
import { AnableVendedorComponent } from './pages/add-cripto/components/anable-vendedor/anable-vendedor.component';
import { ListUsersComponent } from './pages/add-cripto/components/list-users/list-users.component';
import { CompraCriptoComponent } from './pages/compra-cripto/components/compra-cripto/compra-cripto.component';
import { CriptoComponent } from './pages/cripto/components/cripto/cripto.component';
import { ErrorComponent } from './pages/error/error/error.component';
import { HomeComponent } from './pages/home/home/home.component';

import { LoginComponent } from './pages/login/components/login/login.component';
import { RegisterComponent } from './pages/register/components/register/register.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { CompradorGuard } from './shared/guards/comprador.guard';
import { VendedorGuard } from './shared/guards/vendedor.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'add',
    component: AddCriptoComponent,
    canActivate: [AdminGuard, AuthGuard]
  },
  {
    path:'listVendedor',
    component: AnableVendedorComponent,
    canActivate: [AdminGuard, AuthGuard]
  },
  {
    path:'listUser',
    component: ListUsersComponent,
    canActivate: [AdminGuard, AuthGuard]
  },
  {
    path:'cripto',
    component: CriptoComponent,
    canActivate: [VendedorGuard, AuthGuard]
  },
  {
    path:'compra',
    component: CompraCriptoComponent,
    canActivate: [CompradorGuard, AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
