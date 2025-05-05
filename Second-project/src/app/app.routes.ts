
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
import { PaymentComponent } from './payment/payment.component';
import { TourGuidesComponent } from './tour-guides/tour-guides.component';
import { LeftSideComponent } from './admin/left-side/left-side.component';
import { DeshboardComponent } from './admin/deshboard/deshboard.component';
import { MainLayoutComponent } from './admin/main-layout/main-layout.component';
import { AddPackageComponent } from './admin/add-package/add-package.component';
import { DeletePackageComponent } from './admin/delete-package/delete-package.component';


export const routes: Routes = [
    { path: '', component: CardComponent },
    { path: 'card', component: CardComponent},
    { path: 'create-form', component: CreateFormComponent },
    //{ path: 'flight', component: FlightComponent },
    { path: 'transportation', component: TransportationComponent },
    { path: 'stays', component: HotelComponent },   
    { path: 'stay-form', component: StaysComponent },   
    { path: 'login', component: LoginComponent },   
    { path: 'register', component: RegisterComponent },  
    { path: 'type', component: TypeComponent },
    { path: 'payment', component: PaymentComponent},
    { path: 'tour-guides', component: TourGuidesComponent},

   //admin
   {
    path:'admin',
    component:MainLayoutComponent,
    children : [
        {
            path: '', redirectTo: 'deshboard',
            pathMatch: 'full'
        },
        {
            path: 'deshboard',
            component:DeshboardComponent
        },
        
         { path: 'add-data', component: AddDataComponent },
         { path: 'add-package', component: AddPackageComponent },
         { path: 'delete-package', component: DeletePackageComponent },
    ]
   }
   
];
