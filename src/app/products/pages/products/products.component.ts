
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  icon=faTrash;
  public productSelected!: Product;

  

  public productForm:FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    name: ['', [Validators.required, Validators.minLength(5) , Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    logo: ['', [Validators.required, ]],
    date_libe: ['', [Validators.required]],
    date_rev: ['', [Validators.required]],
  }
  ) ;

  constructor(private fb: FormBuilder, private productService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.uploadProduct(id);       
    })
  }

  uploadProduct(id:string){
    if(id === 'new'){
      return;
    } 
    this.productService.getProductById(id)
      .pipe(
          delay(100)
      ).subscribe((product: Product) =>{
        if(!product){
          return this.router.navigateByUrl(`/dashboard/products`)
        }
      this.productSelected = product
      console.log(product)
      return

    })
  }

  createProduct(){
    console.log(this.productForm.value)
    this.productService.saveProduct(this.productForm.value).subscribe(() =>{
      console.log('creadi')
    })
  }

  
}
