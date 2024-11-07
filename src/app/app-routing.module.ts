import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: PublicLayoutComponent, children: [{ path: '', component: LoginComponent }] },
  { path: 'portal', component: AuthLayoutComponent, children: [{ path: '', component: HomeComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
