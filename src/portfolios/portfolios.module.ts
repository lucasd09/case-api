import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PortfoliosController],
  providers: [PortfoliosService, PrismaService],
})
export class PortfoliosModule {}
