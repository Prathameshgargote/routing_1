import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';
import { ProductDashComponent } from './components/product-dash/product-dash.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'user',
    component:UserDashComponent
  },
  {
    path:'user/add',
    component:UserFormComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'user/:id/edit',
    component:UserFormComponent
  },
  {
    path:'product',
    component:ProductDashComponent
  },
  {
    path:'product/add',
    component:ProductFormComponent
  },
  {
    path:'product/:id',
    component:ProductComponent
  },
  {
    path:'product/:id/edit',
    component:ProductFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
