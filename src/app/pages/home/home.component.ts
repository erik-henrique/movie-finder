import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '@api/movie/movie.service';
import IAPIResponseLazyLoading from '@models/api_response_lazy_loading';
import IMovie from '@models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  movieTerms = new Set<string>();
  form: FormGroup;
  moviesFound: IAPIResponseLazyLoading<IMovie>[];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly movieService: MovieService
  ) {
    this.form = this.formBuilder.group({
      movieTerm: this.formBuilder.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  addMovieToFind(): void {
    if (this.form.invalid) {
      return;
    }

    if (!this.movieTerms.has(this.movieTerm)) {
      this.movieTerms.add(this.movieTerm);
    }

    this.form.reset();
  }

  get movieTermsArray() {
    return [...this.movieTerms];
  }

  get movieTerm(): string {
    const { movieTerm } = this.form.value as { movieTerm: string };
    return movieTerm;
  }

  deleteMovieToFind(movieTerm: string): void {
    this.movieTerms.delete(movieTerm);
    this.findMovies();
  }

  async findMovies() {
    this.isLoading = true;

    this.moviesFound = await Promise.all(
      this.movieTermsArray.map((movieTerm) =>
        this.movieService.getMovies(movieTerm).toPromise()
      )
    )
      .catch((error) => {
        console.error(error);
        return error;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
