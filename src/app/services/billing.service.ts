import { Injectable } from '@angular/core';
import RESTService from './rest.service';
import { ApiUrls as urls } from '../utils/api-urls.enum';

@Injectable({
  providedIn: 'root'
})
export class BillingService extends RESTService {
  baseUrl = this.baseUrl + urls.billing;

  all() {
    return this.list();
  }
}
