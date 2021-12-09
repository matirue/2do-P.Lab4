import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { RegisterModule } from './pages/register/register.module';
import { ErrorModule } from './pages/error/error.module';
import { AddCriptoModule } from './pages/add-cripto/add-cripto.module';
import { HomeModule } from './pages/home/home.module';
import { CriptoModule } from './pages/cripto/cripto.module';
import { CompraCriptoModule } from './pages/compra-cripto/compra-cripto.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RegisterModule,
    AngularFireStorageModule,
    ErrorModule,
    AddCriptoModule,
    HomeModule,
    CriptoModule,
    CompraCriptoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
