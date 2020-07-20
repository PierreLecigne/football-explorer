import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseApiClient {
  protected constructor(protected baseUrl: string, protected http: HttpClient) {}

  abstract endpointUrl: string;
  static list<T>(get: (element: any) => T): (element: any[]) => T[] {
    return (item: any[]) => item.map(get);
  }

  protected get(path: string, params: {} = {}, headers: {} = {}): Observable<any> {
    return this.http.get(this.baseUrl + path, {
      params: params as HttpParams,
      headers: headers as HttpHeaders,
    });
  }
}
