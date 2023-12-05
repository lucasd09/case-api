import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { CasesModule } from './cases/cases.module';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, CasesModule, PortfoliosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
