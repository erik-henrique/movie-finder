import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { environment } from '@env/environment';
import { IMovie } from '@models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMovie;
  constructor() {}

  ngOnInit(): void {}

  buildBackgroundImageURL(image: string) {
    return `${environment.movieImageResourceURL}${image}`;
  }

  truncate(input: string) {
    return input.length > 400 ? `${input.substring(0, 400)}...` : input;
  }
}
