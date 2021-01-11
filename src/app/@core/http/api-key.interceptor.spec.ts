import {
  HttpClient,
  HttpParams,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { environment } from '@env/environment';
import { ApiKeyInterceptor } from './api-key.interceptor';

describe('ApiKeyInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiKeyInterceptor,
          multi: true,
        },
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(
      HttpTestingController as Type<HttpTestingController>
    );
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should prepend environment.serverUrl to the request url', () => {
    const params = new HttpParams({
      fromObject: {
        query: 'avengers',
      },
    });

    http.get(`${environment.serverUrl}/search/movie`, { params }).subscribe();

    httpMock.expectOne({
      url: `${environment.serverUrl}/search/movie?query=avengers&api_key=${environment.api_key}`,
    });
  });
});
