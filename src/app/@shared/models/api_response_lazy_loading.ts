export interface IAPIResponseLazyLoading<T> {
  page: number;
  results: T[];
  total_pages: number;
}
