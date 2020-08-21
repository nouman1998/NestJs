import { Controller, Get, Param, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CatDTO } from './DTO/catsDTO';
import { Cat } from './Model/Cat';
import { CatsService } from './cats.service';


@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService){}

    Cats
    @Get()
    findAllCats() {
        this.catService.getHello();
    }
    @Get('/exception/1')
    ecceptionSent(){
        console.log("Nouman")
        throw new HttpException("Not an method",HttpStatus.INTERNAL_SERVER_ERROR);
    }
    

    
    @Get(":id")
    getHelloById(@Param("id") id) {
        console.log("id")
        this.catService.getHelloByID(id);
    }

    @Post('/api/post')
    postCats(@Body() catDTO: CatDTO) {
        let cat = new Cat(new Date(), catDTO.name, catDTO.gender);
        this.Cats.push(cat);
        return this.Cats;
    }
    @Post('/*')
    PostException(){
        console.log("Nouman")
        throw new HttpException("Not an method",HttpStatus.INTERNAL_SERVER_ERROR);
    }
   

}
