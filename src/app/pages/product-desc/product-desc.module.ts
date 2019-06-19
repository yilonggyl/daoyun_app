import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDescPage } from './product-desc.page';
import {PopoverComponent} from '../../components/popover/popover.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDescPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDescPage, PopoverComponent],
  entryComponents: [PopoverComponent]
})
export class ProductDescPageModule {}
