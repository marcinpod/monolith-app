import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {RelationHistoryDashboardComponent} from './relation-history-dashboard/relation-history-dashboard.component';
import {SkeletonComponent} from "mfcmptestcomponents";


@NgModule({
  declarations: [
    RelationHistoryDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: RelationHistoryDashboardComponent
      }
    ]),
    SkeletonComponent
  ]
})
export class RelationHistoryModule {
}
