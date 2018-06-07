import { Routes } from "@angular/router";


export const FULL_ROUTES: Routes = [
    {
        path: 'pages',
        loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'files',
        loadChildren: './files/file.module#FileModule'
    }

];