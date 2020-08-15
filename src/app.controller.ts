import { ProductDTO } from './DTO/ProductDto';
import { Product } from './Model/Product';
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, identity } from 'rxjs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): Observable<any> {
    return this.appService.getHello();
  }
  @Get(":id")
  getHelloById(@Param("id") id )
  {
    return this.appService.getHelloById(id);
  }
  @Post()
  addAnything(@Body() productDto :ProductDTO){
    // this.Product.push( this.appService.postProduct(productDto));
    return  this.appService.postProduct(productDto);
  }
  @Put(":id")
    updateAnything(@Param("id") id, @Body() ProductDto:ProductDTO){
    return this.appService.updateProduct(id,ProductDto);
  }
  @Delete(":id")
  deleteProduct(@Param("id") id )
  {
    return this.appService.deleteProduct(id);}
}
