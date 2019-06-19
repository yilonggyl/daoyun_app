import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LocalStorageService} from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class StartAppService implements CanActivate {

    constructor(private localStorageService: LocalStorageService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const appConfig: any = this.localStorageService.get('APP', {
            hasRun: false,
            version: '1.0.0'
        });
        if ( appConfig.hasRun === false ) {
            appConfig.hasRun = true;
            this.localStorageService.set('APP', appConfig);
            return true;
        } else {
            this.router.navigateByUrl('/tabs/(home:home)');
        }
    }
}
