import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IOriginalLanguage } from '@app/@shared/models/movie';
import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;

    component.movie = {
      adult: false,
      backdrop_path: '/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
      genre_ids: [28, 878],
      id: 603,
      original_language: IOriginalLanguage.En,
      original_title: 'The Matrix',
      overview:
        'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
      popularity: 63.063,
      poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      release_date: '1999-03-30',
      title: 'The Matrix',
      video: false,
      vote_average: 8.1,
      vote_count: 18404,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
