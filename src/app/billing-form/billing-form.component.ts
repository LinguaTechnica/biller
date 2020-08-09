import { Component, OnInit } from '@angular/core';
import { BillingService } from '../services/billing.service';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../animations/fade-in.animation';
import { CompanyService } from '../company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css'],
  animations: [fadeInAnimation]
})
export class BillingFormComponent implements OnInit {
  billingForm: FormGroup;
  successMessage: string;
  errorMessage: string;
  companies: any;

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService,
    private companyService: CompanyService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.billingForm = this.fb.group({
      recordType: ['', Validators.required],
      companyId: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', [Validators.pattern('^(\\d*\\.)?\\d+$')]],
      rate: ['', [Validators.pattern('^(\\d*\\.)?\\d+$')]],
      quantity: ['', [Validators.pattern('^(\\d*\\.)?\\d+$')]],
    });

    this.companyService.all().subscribe(
      companies => this.companies = companies,
      err => this.errorMessage = err as any);
  }

  createBill() {
    this.billingService.new(this.billingForm.value).subscribe(
      response => console.log('bf response', response),
      err => {
        // TODO: returns HTTPResponse. Handle error on backend and return a more user friendly message here based on status
        this.errorMessage = err.message as any;
        console.log('bf err', err);
      }
    );
  }

}
