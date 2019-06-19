import { Injectable } from '@angular/core';
import {AjaxResult} from '../shared/ajax-result';
import {Product} from '../shared/product';
import {UUID} from 'angular2-uuid';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private localStorageService: LocalStorageService) { }

  async insert(input: Product): Promise<AjaxResult> {
      input.id = UUID.UUID();
      let pro = this.localStorageService.get('product', []);
      pro.push(input);
      this.localStorageService.set('product', pro);
      return {
          targetUrl: '',
          result: '',
          success: true,
          error: null,
          unAuthorizedRequest: false
      };
  }

  async getList(index: number, size: number): Promise<AjaxResult> {
      if (index < 0) {
          // 实际开发中应抛出异常类对象
          throw new Error('分页的索引应大于等于零');
      }
      if (size <= 0) {
          // 实际开发中应抛出异常类对象
          throw new Error('每页显示的记录数应大于零');
      }
      let pro = this.localStorageService.get('product', []);
      let total = pro.length;
      pro = pro.slice((index - 1) * size, index * size);
      let res = {
          totalCount: total,
          product: pro
      };
      return {
          targetUrl: '',
          result: res,
          success: true,
          error: null,
          unAuthorizedRequest: false
      };
  }
  async getListByCategoryId(index: number, size: number, categoryId: number): Promise<AjaxResult> {
      let pro = this.localStorageService.get('product', []);
      let p = [];
      for (let x of pro) {
          if (x.categoryId == categoryId) {
              p.push(x);
          }
      }
      let total = p.length;
      p = p.slice((index - 1) * size, index * size);
      let res = {
          totalCount: total,
          product: p
      };
      return {
          targetUrl: '',
          result: res,
          success: true,
          error: null,
          unAuthorizedRequest: false
      };
  }
  async getProductById(id : string): Promise<AjaxResult> {
      let pro = this.localStorageService.get('product', []);
      for (let x of pro) {
          if (x.id == id) {
              return {
                  targetUrl: '',
                  result: x,
                  success: true,
                  error: null,
                  unAuthorizedRequest: false
              };
          }
      }
      return {
          targetUrl: '',
          result: '',
          success: false,
          error: null,
          unAuthorizedRequest: false
      };
  }
  async getListByCondition(searchProductInput) {

  }
  delete(id: string): boolean {
      let pro =  this.localStorageService.get('product', []);
      for (let i = 0; i < pro.length; i++) {
          if ( pro[i].id == id) {
              pro.splice(i, 1);
              this.localStorageService.set('product', pro);
              return true;
          }
      }
      return false;
  }
  update(product: Product): boolean {
      let pro =  this.localStorageService.get('product', []);
      for (let i = 0; i < pro.length; i++) {
          if ( pro[i].id == product.id) {
              pro[i] = product;
              this.localStorageService.set('product', pro);
              return true;
          }
      }
      return false;
  }
}
