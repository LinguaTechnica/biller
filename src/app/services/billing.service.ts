import { Injectable } from '@angular/core';
import RESTService from './rest.service';
import { ApiUrls as urls } from '../utils/api-urls.enum';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingService extends RESTService {
  baseUrl = this.baseUrl + urls.billing;
  flatFeeUrl = this.baseUrl + urls.flatFeeBill;
  rateUrl = this.baseUrl + urls.rateBasedBill;

  all() {
    return this.list();
  }

  new(billingData) {
    // TODO: endpoints vary for flat fee vs rate. Add if/else for billingData.recordType
    if (billingData.recordType === 'ratebased') {
      return this.rateBasedFee(billingData);
    } else if (billingData.recordType === 'flatfee') {
      return this.newFlatFee(billingData);
    }
  }

  newFlatFee(billingData) {
    return this.create(billingData, `${this.flatFeeUrl}/${billingData.companyId}`);
  }

  rateBasedFee(billingData) {
    return this.create(billingData, `${this.rateUrl}/${billingData.companyId}`);
  }
}
