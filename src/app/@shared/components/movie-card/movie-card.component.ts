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
  isLoadingImage = true;
  hasErrorOnImage = false;
  constructor() {}

  ngOnInit(): void {}

  buildBackgroundImageURL(image: string) {
    return `${environment.movieImageResourceURL}${image}`;
  }

  truncateOverlay(overlay: string) {
    return overlay.length > 400 ? `${overlay.substring(0, 400)}...` : overlay;
  }

  removeLoading() {
    this.isLoadingImage = false;
  }

  handleImageLoadingError() {
    this.removeLoading();
    this.hasErrorOnImage = true;
  }
}
