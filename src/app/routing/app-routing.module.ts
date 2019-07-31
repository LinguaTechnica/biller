import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BillingRecordComponent } from '../billing-record/billing-record.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'billing', component: BillingRecordComponent },
  { path: 'billing/new', component: BillingRecordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
