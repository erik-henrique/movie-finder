import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShellModule } from '@app/shell/shell.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './components/loader/loader.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  imports: [CommonModule, TranslateModule.forRoot(), ShellModule],

  declarations: [LoaderComponent, MovieCardComponent],
  exports: [ShellModule, LoaderComponent, MovieCardComponent, TranslateModule],
})
export class SharedModule {}
