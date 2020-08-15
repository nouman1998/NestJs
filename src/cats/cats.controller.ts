import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    findAllCats(){
        return "Get All Cats functions"
    }
}
