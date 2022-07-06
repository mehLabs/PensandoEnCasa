import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
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
import { ComprobanteComponent } from './checkout/comprobante/comprobante.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';
import { CallbackComponent } from './components/auth/callback/callback.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FAQComponent } from './components/pages/faq/faq.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { PrivacyPoliticsComponent } from './components/pages/privacy-politics/privacy-politics.component';
import { PromosComponent } from './components/pages/promos/promos.component';
import { ShipmentsComponent } from './components/pages/shipments/shipments.component';
import { ArrepentimientoComponent } from './components/pages/arrepentimiento/arrepentimiento.component';
import { AdminPromosComponent } from './components/admin/admin-promos/admin-promos.component';
import { DevMercadopagoComponent } from './dev/dev-mercadopago/dev-mercadopago.component';

const routes: Routes = [
  {path:"articles",component:ArticlesComponent},
  {path:"articles/article/:productId",component:ArticleDetailsComponent},
  {path:"home",component:HomeComponent},
  {path:"search",component:SearchComponent},
  {path:"store",component:StoreComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:ConfirmBuyComponent},
  {path:"auth",component:AuthComponent},
  {path:"comprobante",component:ComprobanteComponent},
  {path:"contacto",component:ContactComponent},
  {path:"preguntas",component:FAQComponent},
  {path:"equipo",component:OurTeamComponent},
  {path:"privacidad",component:PrivacyPoliticsComponent},
  {path:"promos",component:PromosComponent},
  {path:"envios",component:ShipmentsComponent},
  {path:"arrepentimiento",component:ArrepentimientoComponent},

  /*
  https://www.pensandoencasa.com.ar/success?
  collection_id=1254653352&
  collection_status=approved&
  payment_id=1254653352&
  status=approved&
  external_reference=hugo.iturrieta@protonmail.com&
  payment_type=credit_card&
  merchant_order_id=4910253511&
  preference_id=648624549-f266543d-fc7b-4cd5-ac57-455d88db022f&
  site_id=MLA&
  processing_mode=aggregator&
  merchant_account_id=null
  */
 
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard]},
    //canActivate: [AuthGuard]},
  {path:"admin/products",component:FormComponent,canActivate:[AuthGuard]},
  {path:"callback",component:CallbackComponent,canActivate:[AuthGuard]},
  {path:"admin/categories",component:CategoriesComponent,canActivate:[AuthGuard]},
  {path:"admin/ventas",component:VentasComponent,canActivate:[AuthGuard]},
  {path:"admin/promos",component:AdminPromosComponent,canActivate:[AuthGuard]},
  {path:"dev/mp",component:DevMercadopagoComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:"**",component:Page404ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
