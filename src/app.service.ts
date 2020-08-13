import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloById(id: any) {
    return `Hello World ${id}`;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
