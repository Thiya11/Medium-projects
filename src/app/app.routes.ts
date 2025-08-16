import { Routes } from '@angular/router';
import { GravityDrop } from './gravity-drop/gravity-drop';
import { Dashboard } from './dashboard/dashboard';
import { DarkMode } from './dark-mode/dark-mode';

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
    },
    {
        path:'dark-mode',
        component:DarkMode
    }
];
