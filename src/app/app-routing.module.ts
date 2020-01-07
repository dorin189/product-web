import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductListingComponent} from './product-listing/product-listing.component';
import {ListingDetailsComponent} from './listing-details/listing-details.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listing' },
  { path: 'create', component: ProductComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'listing', component: ProductListingComponent },
  { path: 'details/:id', component: ListingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
