import {Component, NgZone, OnInit} from '@angular/core';
import {Supplier} from '../../shared/supplier';
import {SupplierService} from '../../services/supplier.service';
import {AlertController, Events, ItemSliding} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.page.html',
  styleUrls: ['./supplier-list.page.scss'],
})
export class SupplierListPage implements OnInit {
  supplier: Array<Supplier>;
  constructor(private supplierService: SupplierService, private alertController: AlertController,
              private zone: NgZone, private events: Events, private location: Location) {
    this.initSupplier();
  }
  initSupplier() {
      this.supplierService.getAll().then( (data) => {
          this.supplier = data.result;
      });
  }
  ngOnInit() {
  }
  async presentAlertPrompt() {
      const alert = await this.alertController.create({
          header: '新增供货商',
          inputs: [
              {
                  name: 'name',
                  type: 'text',
                  placeholder: '输入供货商名称'
              },
              {
                  name: 'phone',
                  type: 'number',
                  placeholder: '输入供货商电话'
              }
          ],
          buttons: [
              {
                  text: '取消',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: () => {
                      console.log('Confirm Cancel');
                  }
              }, {
                  text: '保存',
                  handler: (data) => {
                      let sup: Supplier = {
                          id: '',
                          name: data.name,
                          phone: data.phone
                      };
                      this.supplierService.insert(sup);
                      this.zone.run(() => {
                          this.initSupplier();
                      });
                  }
              }
          ]
      });
      await alert.present();
  }
  onSelectSupplier(supplier: Supplier) {
      this.events.publish('supplier:selected', supplier, Date.now());
      this.location.back();
  }
}
