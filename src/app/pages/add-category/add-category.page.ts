import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../shared/category';
import {CategoryService} from '../../services/category.service';
import {AlertController, ToastController} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  id: number;
  name: string;
  children: Array<Category> = [];
  category: Category = {
      id: 0,
      name: '',
      children: []
  };
  increaseId = 1;
  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService,
              private toastController: ToastController, private alertController: AlertController,
              private router: Router, private location: Location) {
      activatedRoute.queryParams.subscribe(queryParams => {
          this.id = queryParams.id;
          this.name = queryParams.name;
      });
      const newChildren: Category = {
              id: this.increaseId++,
              name: '',
              children: []
          };
      this.children.push(newChildren);
  }

  ngOnInit() {
  }
  onAddSubCategory() {
      const newChildren: Category = {
          id: this.increaseId++,
          name: '',
          children: []
      };
      this.children.push(newChildren);
  }
  onSave() {
      if (this.id == 0) {
          this.onSavaAddCategory();
      } else {
          this.onSavaAddSubCategory();
      }
  }
  async onSavaAddCategory() {
      this.category.children = this.children;
      if (this.categoryService.insert(this.category)) {
          let alert = await this.alertController.create({
              header: '提示',
              message: '新增成功',
              buttons: ['确定']
          });
          alert.present();
          this.router.navigateByUrl('categoryList');
      } else {
          let toast = await this.toastController.create({
              message: '请注意商品大类或者小类不能重复！',
              duration: 3000
          });
          toast.present();
      }
  }
  async onSavaAddSubCategory() {
      this.category.children = this.children;
      this.category.id = this.id;
      let data = await this.categoryService.insertSubCategory(this.category);
     if (data.success) {
         let alert = await this.alertController.create({
             header: '提示',
             message: '新增成功',
             buttons: ['确定']
         });
         alert.present();
         this.router.navigateByUrl('categoryList');
     } else {
         let toast = await this.toastController.create({
             message: '请注意商品大类或者小类不能重复！',
             duration: 3000
         });
         toast.present();
     }
  }
  back() {
      this.location.back();
  }
}
