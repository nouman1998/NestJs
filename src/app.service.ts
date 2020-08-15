import { Product } from './Model/Product';
import { Injectable, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ProductDTO } from './DTO/ProductDto';

@Injectable()
export class AppService {
  deleteProduct(id: any) {
    let index= this.Product.findIndex((element)=>{return element.id == id });
    this.Product.splice(index,1);
    return this.Product;
  }
  Product=[]
  updateProduct(id: any, ProductDto: ProductDTO) {
   let index= this.Product.findIndex((element)=>{return element.id == id });
   let product= new Product(id,ProductDto.name);
   this.Product[index]= product;
   return this.Product;
  }
  postProduct(postDTO) {
    let product = new Product(new Date().getTime(),postDTO.name);
    this.Product.push(product)
    return this.Product;
  }
  getHelloById(id: any) {
    return `Hello World ${id}`;
  }
  getHello(): Observable<any> {
    return of('Hello World!');
  }
}
