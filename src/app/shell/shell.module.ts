import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, TranslateModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule { }
