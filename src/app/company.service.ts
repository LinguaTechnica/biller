import { Injectable } from '@angular/core';
import RESTService from './services/rest.service';
import { ApiUrls as urls } from './utils/api-urls.enum';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends RESTService{
  baseUrl = this.baseUrl + urls.companies;

  all() {
    return this.list();
  }

}
