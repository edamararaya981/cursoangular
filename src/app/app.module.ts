import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Clases firebase
import{AngularFireModule} from '@angular/fire/compat';
import{AngularFireAuthModule} from '@angular/fire/compat/auth';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
//Configuración de Firebase
// import {environment} from 'src/environments/environment';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ModalComponent } from './components/modal/modal.component';
//import { ModalComponent } from './componets/modal/modal.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    CrearEmpleadosComponent,
    NavbarComponent,
    FooterComponent,
    //ModalComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireModule,
    // AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //NgbModule,
    // ToastrModule.forRoot(),
    //NgModule,
    //NgbModule,
    //[NgbPaginationModule, NgbAlertModule],
    //NgbModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
