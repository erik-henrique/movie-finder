import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, MovieCardComponent],
  exports: [LoaderComponent, MovieCardComponent],
})
export class SharedModule {}
