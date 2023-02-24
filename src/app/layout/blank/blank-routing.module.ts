import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LockLeaveGuard } from '@core/services/common/guard/lock-leave.guard';

import { BlankComponent } from './blank.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    data: { key: 'blank', shouldDetach: 'no' },
    children: [
      {
        path: 'empty-page',
        data: { title: '空页面', key: 'empty-page', shouldDetach: 'no' },
        loadComponent: () => import('../../pages/empty/empty.component').then(m => m.EmptyComponent)
      },
      {
        canDeactivate: [LockLeaveGuard],
        path: 'empty-for-lock',
        loadChildren: () => import('../../shared/components/empty-for-lock/empty-for-lock.module').then(m => m.EmptyForLockModule)
      },
      {
        path: 'other-login',
        loadChildren: () => import('../../pages/other-login/other-login.module').then(m => m.OtherLoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankRoutingModule {}
