
import { Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { AddDataComponent } from './add-data/add-data.component';
import { CardComponent } from './card/card.component';
import { TransportationComponent } from './transportation/transportation.component';
import { StaysComponent } from './stays/stays.component';
import { HotelComponent } from './stays/hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TypeComponent } from './transportation/type/type.component';


export const routes: Routes = [
    { path: '', component: CardComponent },
    { path: 'card', component: CardComponent},
    { path: 'create-form', component: CreateFormComponent },
    { path: 'add-data', component: AddDataComponent },
    //{ path: 'flight', component: FlightComponent },
    { path: 'transportation', component: TransportationComponent },
    { path: 'stays', component: HotelComponent },   
    { path: 'stay-form', component: StaysComponent },   
    { path: 'login', component: LoginComponent },   
    { path: 'register', component: RegisterComponent },  
    { path: 'type', component: TypeComponent } 
   
];
