import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, TranslateModule, RouterModule],
  declarations: [ShellComponent],
})
export class ShellModule {}
