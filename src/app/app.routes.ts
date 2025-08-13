import { Routes } from '@angular/router';
import { GravityDrop } from './gravity-drop/gravity-drop';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'dashboard',
        component:Dashboard,
    },
    {
        path:'gravity-drop',
        component:GravityDrop
    }
];
