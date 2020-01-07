import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {

  id: number;
  data: Product;

  constructor(
    public activatedRoute: ActivatedRoute,
    public apiService: ApiService
  ) {
    this.data = new Product();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response[0];
    });
  }


}
