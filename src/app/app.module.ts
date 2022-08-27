import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404ErrorComponent } from './components/page404-error/page404-error.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { AuthModule } from '@auth0/auth0-angular';
import { Auth0ButtonComponent } from './components/auth0-button/auth0-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormComponent } from './components/admin/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipeModule } from './currency-pipe/currency-pipe.module';
import { QueBuscasComponent } from './components/que-buscas/que-buscas.component';
import { ShopComponent } from './home-components/shop/shop.component';
import { SiteInConstructionComponent } from './components/site-in-construction/site-in-construction.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';


import { environment as env, environment } from '../environments/environment';

import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { CreditsComponent } from './components/credits/credits.component';
import { SearchComponent } from './components/search/search.component';
import { ConfirmBuyComponent } from './components/confirm-buy/confirm-buy.component';

import {initializeApp} from 'firebase/app';
import { CheckoutButtonComponent } from './checkout/checkout-button/checkout-button.component';
import { ComprobanteComponent } from './checkout/comprobante/comprobante.component';
import { QRCodeModule } from 'angularx-qrcode';
import { VentasComponent } from './components/admin/ventas/ventas.component';
import { FeePayerPipe } from './pipes/fee-payer.pipe';
import { CallbackComponent } from './components/auth/callback/callback.component';
import { CartAddToButtonComponent } from './components/cart-add-to-button/cart-add-to-button.component';
import { MainSpinnerComponent } from './components/main-spinner/main-spinner.component';
import { BtnSocialMediaComponent } from './components/btn-social-media/btn-social-media.component';
import { FAQComponent } from './components/pages/faq/faq.component';
import { PrivacyPoliticsComponent } from './components/pages/privacy-politics/privacy-politics.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ShipmentsComponent } from './components/pages/shipments/shipments.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { PromosComponent } from './components/pages/promos/promos.component';
import { BtnInicioComponent } from './components/btn-inicio/btn-inicio.component';
import { ArrepentimientoComponent } from './components/pages/arrepentimiento/arrepentimiento.component';
import { AdminPromosComponent } from './components/admin/admin-promos/admin-promos.component';
import { DevMercadopagoComponent } from './dev/dev-mercadopago/dev-mercadopago.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { ChatComponent } from './components/chat/chat.component';
const firebase = initializeApp(environment.firebaseConfig);
import { FacebookModule } from 'ngx-facebook';
import { AdminPromoComponent } from './components/admin/admin-promos/admin-promo/admin-promo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    HomeComponent,
    FooterComponent,
    Page404ErrorComponent,
    CartComponent,
    StoreComponent,
    ArticleDetailsComponent,
    AuthComponent,
    AdminComponent,
    Auth0ButtonComponent,
    UserProfileComponent,
    FormComponent,
    SpinnerComponent,
    QueBuscasComponent,
    ShopComponent,
    SiteInConstructionComponent,
    CategoriesComponent,
    CreditsComponent,
    SearchComponent,
    ConfirmBuyComponent,
    CheckoutButtonComponent,
    ComprobanteComponent,
    VentasComponent,
    FeePayerPipe,
    CallbackComponent,
    CartAddToButtonComponent,
    MainSpinnerComponent,
    BtnSocialMediaComponent,
    FAQComponent,
    PrivacyPoliticsComponent,
    ContactComponent,
    ShipmentsComponent,
    OurTeamComponent,
    PromosComponent,
    BtnInicioComponent,
    ArrepentimientoComponent,
    AdminPromosComponent,
    DevMercadopagoComponent,
    CartButtonComponent,
    ChatComponent,
    AdminPromoComponent
  ],
  imports: [
    FacebookModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    CurrencyPipeModule,
    AuthModule.forRoot({
      ... env.auth,
      httpInterceptor : {
        allowedList: [
          `${env.dev.serverUrl}/api/articulos/add`,
          `${env.dev.serverUrl}/api/categoria/add`,
          `${env.dev.serverUrl}/api/articulos/del/*`,
          `${env.dev.serverUrl}/api/articulos/mod/*`,
          `${env.dev.serverUrl}/api/categoria/del/*`,
          `${env.dev.serverUrl}/api/articulos/*/sell`,
          `${env.dev.serverUrl}/api/articulos/*/add`,
          `${env.dev.serverUrl}/api/admin/*`,
          `${env.dev.serverUrl}/api/protected/*`,
          `${env.dev.localUrl}/api/protected/*`
        ], // `${env.dev.serverUrl}/api/` 
        
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
