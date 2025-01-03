import { Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { DisplayComponent } from './Components/display/display.component';

export const routes: Routes = [
    {
        path:'add-product',
        component:ProductComponent
    },
    {
        path:'',
        redirectTo:'add-product',
        pathMatch:'full'
    },
    {
        path:'display',
        component:DisplayComponent
    },
];
