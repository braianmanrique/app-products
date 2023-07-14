import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public products:Product[] = []; 
  public productsT:Product[] = []; 
  public totalProducts : number = 0;
  public from : number = 0;
  public limit : number = 5;
  faCoffee = faCircleInfo;
  faEllipsisV = faEllipsisV;
  faEdit = faEdit;
  faTrash = faTrash;
  constructor(private productService : ProductsService){

  }

ngOnInit() {
  this.getProducts();
}
 
getProducts(){
  this.productService.getProducts(this.from, this.limit).subscribe(({total, products}) =>{
    // console.log(data);
    this.totalProducts = total;
    this.products = products;
    this.productsT = products;
  })
}
changeLimit(){
  console.log(this.limit)
  this.getProducts()
}
changePage(value: number){
  this.from += value;
  if(this.from < 0){
    this.from = 0;
  }else if(this.from > this.totalProducts){
    this.from -= value;
  }
  this.getProducts();

}


searchProduct(term: string){
  console.log(term)
  if(term.length === 0){
    this.totalProducts = this.productsT.length
    return this.products = this.productsT;

  }
  this.productService.searhProduct(term).subscribe(  (resp: any) => {
    this.products = resp.data;
    this.totalProducts = this.products.length
    console.log(resp)
  })
  return;
} 
deleteProduct(product : Product){
  this.productService.deleteProduct(product.uid!).subscribe(()=>{
    this.getProducts();
  })
}


}
