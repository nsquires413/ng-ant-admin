import { Route } from '@angular/router';

export default [
  {
    path: 'form',
    loadChildren: () => import('./form/form-routing')
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list-routing.module')
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail-routing')
  },

  {
    path: 'personal',
    loadChildren: () => import('./personal/personal-routing')
  },
  {
    path: 'except',
    loadChildren: () => import('./except/except-routing')
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result-routing')
  },
  {
    path: 'flow',
    loadChildren: () => import('./flow/flow-routing')
  },
  {
    path: 'task',
    data: { title: '任务', key: 'task' },
    loadComponent: () => import('./task/task.component').then(m => m.TaskComponent)
  }
] as Route[];
