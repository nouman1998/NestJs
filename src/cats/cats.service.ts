import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    getHelloByID(id: any) {
        return `Id revcieved ${id}`;
    }
    getHello() {
        return "Get All Cats functions";
    }
}
