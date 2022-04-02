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
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
