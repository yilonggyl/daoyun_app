import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import {SettingPage} from '../setting/setting.page';
import {CoursePage} from '../course/course.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
          path: '',
          redirectTo: '/tabs/(course:course)',
          pathMatch: 'full'
      },
      {
        path: 'course',
        outlet: 'course',
        component: CoursePage
      },
      {
        path: 'setting',
        outlet: 'setting',
        component: SettingPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(course:course)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
