import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data: Product;
  error: string;
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {

    this.data = new Product();
    console.log(this.data);
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe(
      (response) => {
        this.error = '';
        this.router.navigate(['list']);
      },
      (error) => {
        this.error = error;
      }
    );

  }

}
