import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404ErrorComponent } from './components/page404-error/page404-error.component';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/cart/cart.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { FormComponent } from './components/admin/form/form.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { SearchComponent } from './components/search/search.component';
import { ConfirmBuyComponent } from './components/confirm-buy/confirm-buy.component';

const routes: Routes = [
  {path:"articles",component:ArticlesComponent},
  {path:"articles/article/:productId",component:ArticleDetailsComponent},
  {path:"home",component:HomeComponent},
  {path:"search",component:SearchComponent},
  {path:"store",component:StoreComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:ConfirmBuyComponent},
  {path:"auth",component:AuthComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard]},
    //canActivate: [AuthGuard]},
  {path:"admin/products",component:FormComponent,canActivate:[AuthGuard]},
  {path:"admin/categories",component:CategoriesComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:"**",component:Page404ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
