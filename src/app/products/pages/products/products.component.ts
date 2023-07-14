
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  // icon=faTrash;
  public productSelected!: Product;
  public date_r: string= '';
  public id_product: string = '';
  public uploadoLogo!: File ;


  public productForm:FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    name: ['', [Validators.required, Validators.minLength(5) , Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    logo: ['', [Validators.required, ]],
    date_libe: ['', [Validators.required]],
    date_rev: [ {value :this.date_r, disabled: true }, [Validators.required]],
  }
  ) ;

  constructor(private fb: FormBuilder, private productService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.id_product = id;
      this.uploadProduct(id);       
    })

    this.validateDtes();
   
  }
  validateDtes(){

    this.productForm.get('date_libe')?.valueChanges
    .subscribe(date_lib=> {
      let d = new Date(date_lib)
      this.date_r = (d.getFullYear()+1) + "-" + ("0" +(d.getMonth()+1)).slice(-2) + "-" + ( "0" + (d.getDate()+1)).slice(-2);
      this.productForm.patchValue({date_rev : this.date_r })
    })
  }

  isValidFields(field: string): boolean | null{
    return this.productForm.controls[field].errors 
      && this.productForm.controls[field].touched;
  }  
  getErrorName(field: string): string| null{
    if(!this.productForm.controls[field]) return null;

    const errors = this.productForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
        switch(key){
          case 'required':
            return `Este campo es requerido`;
          case 'minlength':
            return `Mínimo ${errors['minlength'].requiredLength} caracteres.`
          case 'maxlength':
            return `Maximo ${errors['maxlength'].requiredLength} caracteres.`
        }
    }
    return null

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
        debugger
        const {id, name, description, logo, date_libe , date_rev} = product
      this.productSelected = product
      this.productForm.setValue({id, name, description, logo, date_libe, date_rev})
      return

    })
  }

  createProduct(){
    
    if(this.productForm.invalid){
      this.productForm.markAllAsTouched()
      return
    }
    
    this.productService.saveProduct(this.productForm.getRawValue()).subscribe((resp:any) =>{
      console.log('creadi',resp)
      this.router.navigateByUrl(`dashboard/products/${resp.product.uid}`)
    })
  }

  cleanForm(){
    this.productForm.reset();
  }

  saveLogo(file: File){
    this.uploadoLogo = file;    
  }

  updateProduct(){

    // this.productService.updatePhoto(this.uploadoLogo, this.id_product).then(
    //   img => console.log(img)
    // )

    this.productService.updateProduct(this.productForm.value, this.id_product).subscribe( resp => {
        console.log(resp)
    }, 
    (err)=> {
      console.log(err)
    })
  }
  
}
