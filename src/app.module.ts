import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatServiceService } from './cat-service/cat-service.service';
import { CatService } from './cat/cat.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, CatServiceService, CatService],
})
export class AppModule {}
