import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import {CoursePageModule} from '../course/course.module';
import {SettingPageModule} from '../setting/setting.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    CoursePageModule,
    SettingPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
