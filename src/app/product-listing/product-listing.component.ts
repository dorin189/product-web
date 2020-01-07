import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  productData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.productData = [];
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.productData = response;
    });
  }

}
