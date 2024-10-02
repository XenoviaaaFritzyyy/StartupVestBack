import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';
import { UsersModule } from './module/user.module';
import { Startup } from './entities/businessprofileentities/startup.entity';
import { Investor } from './entities/businessprofileentities/investor.entity';
import { StartupModule } from './module/businessprofilemodule/startup.module';
import { InvestorModule } from './module/businessprofilemodule/investor.module';
import { FundingRound } from './entities/financialentities/funding.entity';
import { FundingModule } from './module/financialmodule/funding.module';
import { ProfilePictureModule } from './module/profilepicturemodule/profilepicture.module';
import { ProfilePicture } from './entities/profilepictureentities/profilepicture.entity';
import { CapTableInvestor } from './entities/financialentities/capInvestor.entity';
import { ActivityModule } from './module/activitymodule/activity.module';
import { Activity } from './entities/activityentities/activity.entity';



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.MYSQL_URL,
      host: process.env.MYSQL_HOST, 
      port: +process.env.MYSQL_PORT, 
      username: process.env.MYSQL_USER, 
      password: process.env.MYSQL_PASSWORD, 
      database: process.env.MYSQL_DATABASE, 
      entities: [User, Startup, Investor,FundingRound, ProfilePicture,CapTableInvestor,Activity],
      synchronize: true,
      // logging:true
    }),
    ProfilePictureModule,
    UsersModule,
    StartupModule,
    InvestorModule,
    FundingModule,
    ActivityModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
