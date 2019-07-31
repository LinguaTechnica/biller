import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { BillingService } from '../services/billing.service';

@Component({
  selector: 'billing-record',
  templateUrl: './billing-record.component.html',
  styleUrls: ['./billing-record.component.css'],
  animations: [fadeInAnimation]
})
export class BillingRecordComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  billingRecords: any;

  constructor (private billingService: BillingService) {}

  ngOnInit() {
    this.billingService.all()
      .subscribe(
        results => this.billingRecords = results,
        error =>  this.errorMessage = error as any);
  }
}
