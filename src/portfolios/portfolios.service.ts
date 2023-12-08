import { Injectable } from '@nestjs/common';
import { Prisma, Portfolio } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { wherePortfolioDto } from './dto/portfolio.dto';

@Injectable()
export class PortfoliosService {
  constructor(private prisma: PrismaService) {}

  async portfolio(
    PortfolioWhereUniqueInput: Prisma.PortfolioWhereUniqueInput,
  ): Promise<Portfolio | null> {
    return this.prisma.portfolio.findUnique({
      where: PortfolioWhereUniqueInput,
    });
  }

  async portfolios(params?: wherePortfolioDto): Promise<Portfolio[]> {
    const { skip, take, cursor, where, orderBy } = params ?? {};
    return this.prisma.portfolio.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.PortfolioCreateInput): Promise<Portfolio> {
    return this.prisma.portfolio.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.PortfolioWhereUniqueInput;
    data: Prisma.PortfolioUpdateInput;
  }): Promise<Portfolio> {
    const { where, data } = params;
    return this.prisma.portfolio.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.PortfolioWhereUniqueInput): Promise<Portfolio> {
    return this.prisma.portfolio.delete({
      where,
    });
  }
}
