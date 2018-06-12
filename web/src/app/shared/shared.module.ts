import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({

  exports: [
    CommonModule,
    FooterComponent,
    SidebarComponent,
    HttpModule,
    TranslateModule,
    NavbarComponent,
    ToggleFullscreenDirective,
    NgbModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpModule,
    TranslateModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ToggleFullscreenDirective
  ]
})
export class SharedModule { }
