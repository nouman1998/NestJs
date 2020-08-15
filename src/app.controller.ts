import { ProductDTO } from './DTO/ProductDto';
import { Product } from './Model/Product';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
Product=[]

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(":id")
  getHelloById(@Param("id") id )
  {
    return this.appService.getHelloById(id);
  }
  @Post()
  addAnything(@Body() productDto :ProductDTO){
    this.Product.push( this.appService.postProduct(productDto));
    return this.Product;
  }
}
