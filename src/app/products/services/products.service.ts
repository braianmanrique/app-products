import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShowProducts } from '../interfaces/product.interface';
import { Product } from '../models/product.model';
import { map } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {  
  constructor(private http: HttpClient) { }

  
  getProducts(desde : number = 0, limit: number = 0){
    const url = `${base_url}/products?desde=${desde}&limit=${limit}`;
   return this.http.get<ShowProducts>(url)
    
  }
  getProductById(id:string){
    const url = `${base_url}/products/${id}`;
    return this.http.get(url)
      .pipe(
          map( (resp : any) => resp.product )
      )
  }

  searhProduct(term: string = ''){
    const url = `${base_url}/busqueda/coleccion/products/${term}`;
    return this.http.get(url);
  }
  deleteProduct(uuid: string){
    const url = `${base_url}/products/${uuid}`;
    return this.http.delete(url);
  }
  saveProduct(product: {id: string, name: string, description: string, logo: string, date_libe: string, date_rev: string}){
    const url = `${base_url}/products/`;
    return this.http.post(url, product)
  }

  updateProduct(data: {name: string, description: string, date_libe: string, date_rev: string}, id: string){
    
    const url = `${base_url}/products/${id}`;
    return this.http.put(url, data)
  }

  async updatePhoto(
    file: File,
    id: string
  ){
    try {
      const url = `${base_url}/upload/${id}`
      const formData = new FormData();
      formData.append('image', file);
      
      const resp = await fetch(url,  {
        method: 'PUT',
        body: formData
      });
      const data = await resp.json();
      if(data.ok){
        return data.nameFile
      }else{
        return false;
      }
      
    } catch (error) {
      console.log(error)
      return false;
    }
  }
}
