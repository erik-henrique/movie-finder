import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShellModule } from '@app/shell/shell.module';
import { LoaderComponent } from './components/loader/loader.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  imports: [CommonModule, ShellModule],
  declarations: [LoaderComponent, MovieCardComponent],
  exports: [ShellModule, LoaderComponent, MovieCardComponent],
})
export class SharedModule {}
