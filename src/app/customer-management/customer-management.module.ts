import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {
  CustomerManagementDashboardComponent
} from './customer-management-dashboard/customer-management-dashboard.component';
import {SkeletonComponent} from "mfcmptestcomponents";


@NgModule({
  declarations: [
    CustomerManagementDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: CustomerManagementDashboardComponent
      }
    ]),
    SkeletonComponent
  ]
})
export class CustomerManagementModule {
}
