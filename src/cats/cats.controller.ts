import { Controller, Get ,Param} from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    findAllCats(){
        return "Get All Cats functions"
    }
    @Get(":id")
    getHelloById(@Param("id") id )
    {
      return `Got cannot and param variable`
    }
}
