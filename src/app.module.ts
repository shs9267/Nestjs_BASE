import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
}) //데코레이터 - 클래스에 함수 기능을 추가 가능
export class AppModule {}
