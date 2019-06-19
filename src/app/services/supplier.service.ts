import { Injectable } from '@angular/core';
import {UUID} from 'angular2-uuid';
import {Supplier} from '../shared/supplier';
import {AjaxResult} from '../shared/ajax-result';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private localStorageService: LocalStorageService) { }
  async insert(input: Supplier): Promise<AjaxResult> {
      input.id = UUID.UUID();
      let sup = this.localStorageService.get('supplier', []);
      sup.push(input);
      this.localStorageService.set('supplier', sup);
      return {
          targetUrl: '',
          result: '',
          success: true,
          error: null,
          unAuthorizedRequest: false
      };
  }
  count(): number {
    let sup = this.localStorageService.get('supplier',[]);
    return sup.length;
  }
  async getAll(): Promise<AjaxResult> {
    let sup =  this.localStorageService.get('supplier', []);
      return {
          targetUrl: '',
          result: sup,
          success: true,
          error: null,
          unAuthorizedRequest: false
      };
  }
  delete(id: string): boolean {
      let sup =  this.localStorageService.get('supplier', []);
      for (let i = 0; i < sup.length; i++) {
          if ( sup[i].id == id) {
              sup.splice(i, 1);
              this.localStorageService.set('supplier', sup);
              return true;
          }
      }
      return false;
  }
}
