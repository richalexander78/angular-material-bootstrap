import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private http: HttpClient) { }

  beerUrl = 'https://api.openbrewerydb.org/breweries';

  getBeer() {
    return this.http.get(this.beerUrl);
  }

}

