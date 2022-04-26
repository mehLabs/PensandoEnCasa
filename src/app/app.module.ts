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
import { HttpClientModule } from '@angular/common/http';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { RouterModule } from '@angular/router';
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
    QueBuscasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyPipeModule,
    AuthModule.forRoot({
      domain: 'dev-3c83cuvr.us.auth0.com',
      clientId: 'D4EeJ3XMiMyl7DrJIIR9ZR18UAsCcreu'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
