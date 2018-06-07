import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListComponent } from './file-list/file-list.component';
import { FileDetailComponent } from './file-detail/file-detail.component';
import { FileCreateComponent } from './file-create/file-create.component';
import { FileRoutingModule } from './file-routing.module';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FileRoutingModule,
    MatTabsModule,
    MatIconModule,
    NgbModule
  ],
  declarations: [
    FileListComponent,
    FileDetailComponent,
    FileCreateComponent
  ]
})
export class FileModule { }
