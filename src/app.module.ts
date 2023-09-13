import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as config from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
const configModule = ConfigModule.forRoot({
  isGlobal: true,
});
// 'mongodb://127.0.0.1:27017/Zuri'
console.log(process.env.DATABASE_URL);
@Module({
  imports: [
    configModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
