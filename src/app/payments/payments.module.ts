import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {PaymentsDashboardComponent} from './payments-dashboard/payments-dashboard.component';
import {SkeletonComponent} from "mfcmptestcomponents";


@NgModule({
  declarations: [
    PaymentsDashboardComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'dashboard',
                component: PaymentsDashboardComponent
            }
        ]),
        SkeletonComponent
    ]
})
export class PaymentsModule {
}
