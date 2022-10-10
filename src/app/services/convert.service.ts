import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(
    private readonly http: HttpClient
  ) { }


  /* VARS */

  private readonly url: string = "https://open.er-api.com/v6/latest"


  /** 
   * this method is used to convert a country's coin value to another country's coin value get 
   * their values on an api.
   */

  public getConvertValues(value: any): Observable<any> {
    return this.http.get(`${this.url}/${value}`)
  }

}
