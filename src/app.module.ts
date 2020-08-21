import { CatsService } from './cats/cats.service';
import { Module, MiddlewareConsumer, Get, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './cats/CatsMiddleware';
import { CatsController } from './cats/cats.controller';


@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude({path:'cats1',method:RequestMethod.GET})
      .forRoutes(CatsController)
      
  }
}
