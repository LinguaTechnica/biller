import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrls  as urls} from '../utils/api-urls.enum';
import { environment as env } from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';

abstract class RESTService {
  // Endpoints use LEADING SLASHES not trailing slashes
  // DO NOT use a trailing slash on your endpoints
  protected baseUrl = env.baseUrl + urls.api;
  protected headers: object;

  constructor(protected http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  // TODO: Most error handling should happen here, not in children.

  list() {
    return this.http.get(this.baseUrl, this.headers);
  }

  detail(id) {
    return this.http.get(`${this.baseUrl}/${id}`, this.headers);
  }

  create(data, altUrl=this.baseUrl) {
    return this.http.post(altUrl, data, this.headers);
  }

  update(data) {
    return this.http.patch(this.baseUrl, data, this.headers);
  }

  delete(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}

export default RESTService;
