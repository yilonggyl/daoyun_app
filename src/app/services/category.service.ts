import { Injectable } from '@angular/core';
import {CATEGORIES} from '../shared/mock.categories';
import {AjaxResult} from '../shared/ajax-result';
import {LocalStorageService} from './local-storage.service';
import {Category} from '../shared/category';
import {Observable, Subject} from 'rxjs/index';
import {ActiveCategory} from '../shared/active-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categorySubject = new Subject<ActiveCategory>();
  constructor(private localStorageService: LocalStorageService) { }
  async getAll(): Promise<AjaxResult> {
      const c = this.localStorageService.get('Category', CATEGORIES);
      return {
          targetUrl: '',
          result: c,
          success: true,
          error: null,
          unAuthorizedRequest: false
      };
  }
  insert(category: Category) {
      if (this.isUniqueName(category)) {
          this.getAll().then((data) => {
              let categories = data.result;
              category.id = categories.length + 1;
              categories.push(category);
              this.localStorageService.set('Category', categories);
          });
          return true;
      } else {
          return false;
      }
  }
  isUniqueName(category: Category): boolean {
      const x = [];
      for (const c of category.children) {
          x.push(c.name);
      }
      x.sort();
      for (let i = 1; i < x.length ; i++) {
          if (x[i] == x[i - 1]) {
              return false;
          }
      }
      return true;
  }
  async get(id: number): Promise<AjaxResult> {
      const cat = this.localStorageService.get('Category', CATEGORIES);
      for (const c of cat) {
          if (id == c.id) {
              return {
                  targetUrl: '',
                  result: c,
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
  update(category: Category): boolean {
      const cat = this.localStorageService.get('Category', CATEGORIES);
      for (const c of cat) {
          if (category.id == c.id) {
              c.name = category.name;
              c.children = category.children;
              this.localStorageService.set('Category', cat);
              return true;
          }
      }
      return false;
  }
  async insertSubCategory(category: Category): Promise<AjaxResult> {
      if (this.isUniqueName(category)) {
          let data = await this.get(category.id);
          if (data.success) {
              let cat = data.result;
              let maxId = category.id * 100 + 1;
              for (let c of cat.children) {
                  if (c.id > maxId) {
                      maxId = c.id;
                  }
              }
              for (let c of category.children) {
                  c.id = maxId + 1;
                  maxId = c.id;
                  cat.children.push(c);
              }
              if (this.isUniqueName(cat)) {
                  this.update(cat);
                  return {
                      targetUrl: '',
                      result: '',
                      success: true,
                      error: null,
                      unAuthorizedRequest: false
                  };
              }
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
  delete(id: number): boolean {
      const cat = this.localStorageService.get('Category', CATEGORIES);
      for (let i = 0; i < cat.length; i++) {
          if ( cat[i].id == id) {
              cat.splice(i, 1);
              this.localStorageService.set('Category', cat);
              return true;
          }
          for (let j = 0; j < cat[i].children.length; j++) {
              if (cat[i].children[j].id == id) {
                  cat[i].children.splice(j, 1);
                  this.localStorageService.set('Category', cat);
                  return true;
              }
          }
      }
      return false;
  }
  watchCategory(): Observable<ActiveCategory> {
      return this.categorySubject.asObservable();
  }
}
