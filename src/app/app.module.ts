import { NgModule } from '@angular/core';
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

import * as firebase from 'firebase/app';
import 'firebase/functions';
import { CheckoutButtonComponent } from './checkout/checkout-button/checkout-button.component';
firebase.initializeApp(environment.firebaseConfig);

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
          `${env.dev.serverUrl}/api/public/mp/*`
        ] // `${env.dev.serverUrl}/api/` 
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
