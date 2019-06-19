import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartAppService} from './services/start-app.service';


const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'welcome',
    //     pathMatch: 'full'
    // },
    { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
    {
        path: 'home',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    {
        path: 'welcome',
        loadChildren: './pages/welcome/welcome.module#WelcomePageModule',
        canActivate: [StartAppService]
    },
    {
        path: 'signup',
        loadChildren: './pages/signup/signup.module#SignupPageModule'
    },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'forgotPassword', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'change-password', loadChildren: './pages/change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopPageModule' },
  { path: 'editShop', loadChildren: './pages/edit-shop/edit-shop.module#EditShopPageModule' },
  { path: 'categoryList', loadChildren: './pages/category-list/category-list.module#CategoryListPageModule' },
  { path: 'addCategory', loadChildren: './pages/add-category/add-category.module#AddCategoryPageModule' },
  { path: 'editCategory', loadChildren: './pages/edit-category/edit-category.module#EditCategoryPageModule' },
  { path: 'editCategoryName', loadChildren: './pages/edit-category-name/edit-category-name.module#EditCategoryNamePageModule' },
  { path: 'addProduct', loadChildren: './pages/add-product/add-product.module#AddProductPageModule' },
  { path: 'supplierList', loadChildren: './pages/supplier-list/supplier-list.module#SupplierListPageModule' },
  { path: 'productList', loadChildren: './pages/product-list/product-list.module#ProductListPageModule' },
  { path: 'productDesc', loadChildren: './pages/product-desc/product-desc.module#ProductDescPageModule' },
  { path: 'inOutStock', loadChildren: './pages/in-out-stock/in-out-stock.module#InOutStockPageModule' },
  { path: 'course', loadChildren: './pages/course/course.module#CoursePageModule' },
  { path: 'addCourse', loadChildren: './pages/add-course/add-course.module#AddCoursePageModule' },
  { path: 'signIn', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'courseDetial', loadChildren: './pages/course-detial/course-detial.module#CourseDetialPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
