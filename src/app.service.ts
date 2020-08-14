import { Product } from './Model/Product';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  postProduct(postDTO) {
    let product = new Product(new Date().getTime(),postDTO.name);
    return product;
  }
  getHelloById(id: any) {
    return `Hello World ${id}`;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
