import { Controller, Get, Param, Post, Body } from '@nestjs/common';
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
    @Get(":id")
    getHelloById(@Param("id") id) {
        this.catService.getHelloByID(id);
    }

    @Post()
    postCats(@Body() catDTO: CatDTO) {
        let cat = new Cat(new Date(), catDTO.name, catDTO.gender);
        this.Cats.push(cat);
        return this.Cats;
    }

}
