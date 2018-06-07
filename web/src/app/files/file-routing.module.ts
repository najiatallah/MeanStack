import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileListComponent } from './file-list/file-list.component';
import { FileDetailComponent } from './file-detail/file-detail.component';
import { FileCreateComponent } from './file-create/file-create.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'list',
        component: FileListComponent,
        data: { title: 'File List' }
      },
      {
        path: 'detail/:id',
        component: FileDetailComponent,
        data: {
          title: 'File detail'
        }
      },
      {
        path: 'edit/:id',
        component: FileDetailComponent,
        data: {
          title: 'File Edit'
        }
      },
      {
        path: 'create',
        component: FileCreateComponent,
        data: {
          title: 'create file'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileRoutingModule { }
