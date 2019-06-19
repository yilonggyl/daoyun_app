import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-edit-category-name',
  templateUrl: './edit-category-name.page.html',
  styleUrls: ['./edit-category-name.page.scss'],
})
export class EditCategoryNamePage implements OnInit {

  name: string; // 在模板中使用ngModel双向绑定
  constructor(private modalController: ModalController, private navParams: NavParams) {
      // 通过navParams接收传过来的参数
      this.name = this.navParams.data['value'];
  }

  ngOnInit() {
  }
  dismiss(name?: string) {
      this.modalController.dismiss(name);
  }
  onSave() {
      this.dismiss(this.name);
  }
}
