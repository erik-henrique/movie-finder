import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponseLazyLoading } from '@models/api_response_lazy_loading';
import { IMovie } from '@models/movie';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private endpoint = `${environment.serverUrl}/search/movie`;

  constructor(private readonly httpClient: HttpClient) {}

  getMovies(term: string): Observable<IAPIResponseLazyLoading<IMovie>> {
    const params = new HttpParams({
      fromObject: {
        query: term,
      },
    });

    return this.httpClient.get<IAPIResponseLazyLoading<IMovie>>(this.endpoint, {
      params,
    });
  }
}
