import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../shared/category';
import {CategoryService} from '../../services/category.service';
import {AlertController, ItemSliding, ModalController} from '@ionic/angular';
import {EditCategoryNamePage} from '../edit-category-name/edit-category-name.page';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit {
  category: Category;
  id: number;
  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService,
              private modalController: ModalController, private alertController: AlertController,
              private router: Router, private location: Location, private ngZone: NgZone) {
      activatedRoute.queryParams.subscribe(queryParams => {
          this.id = queryParams.id;
      });
      this.categoryService.get(this.id).then( (data) => {
        if (data.success) {
          this.category = data.result;
        }
      });
  }
  ionViewWillEnter() {
      this.categoryService.get(this.id).then( (data) => {
          if (data.success) {
              this.category = data.result;
          }
      });
  }
  ngOnInit() {
  }
  private async presentModal(name: string) {
    const modal = await this.modalController.create({
        component: EditCategoryNamePage,
        componentProps: { value: name }
    });
    await modal.present();
    return modal.onWillDismiss();
  }
  async onEditCategoryName(item: ItemSliding) {
      item.close();
      const {data} = await this.presentModal(this.category.name);
      if (data) {
          this.category.name = data;
          this.categoryService.update(this.category);
      }
  }
  async onEditSubCategoryName(item: ItemSliding, subCategory: Category) {
      item.close();
      const {data} = await this.presentModal(subCategory.name);
      if (data) {
          let id = subCategory.id;
          for (let c of this.category.children) {
              if (c.id == id) {
                  c.name = data;
                  this.categoryService.update(this.category);
                  break;
              }
          }
      }
  }
  async onDelete(item: ItemSliding, subId: number) {
    item.close();
    let alert = await this.alertController.create({
        header: '你确认要删除吗!',
        message: '请先删除该类别下的所有商品记录',
        buttons: [
            {
                text: '取消',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
            }
            }, {
                text: '确认',
                handler: () => {
                if (this.categoryService.delete(subId)) {
                    // 删除成功
                    this.ngZone.run(() => {
                        this.router.navigateByUrl('categoryList');
                    });
                }
            }
            }
        ]
    });
    await alert.present();
  }
  back() {
      this.location.back();
  }
}
