import { Controller, Get ,Param, Post, Body} from '@nestjs/common';
import { CatDTO } from './DTO/catsDTO';
import { Cat } from './Model/Cat';
import { runInThisContext } from 'vm';

@Controller('cats')
export class CatsController {
Cats
    @Get()
    findAllCats(){
        return "Get All Cats functions"
    }
    @Get(":id")
    getHelloById(@Param("id") id )
    {
      return `Got cannot and param variable`
    }

    @Post()
    postCats(@Body() catDTO: CatDTO ){
        let cat = new Cat(new Date(),catDTO.name,catDTO.gender);
        this.Cats.push(cat);
        return this.Cats;   
    }

}
