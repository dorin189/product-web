import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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
    this.apiService.getListBackOffice().subscribe(response => {
      console.log(response);
      this.productData = response;
    });
  }

  delete(item) {
    this.apiService.deleteItem(item.id).subscribe(Response => {
      this.getAllProducts();
    });
  }

}
