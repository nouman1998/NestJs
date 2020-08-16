import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { Service } from './cats.service';

@Module({
  controllers: [ CatsController],
  providers: [Service]
})
export class CatsModule {}
