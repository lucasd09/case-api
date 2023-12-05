import { Injectable } from '@nestjs/common';
import { Case, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CasesService {
  constructor(private prisma: PrismaService) {}

  async case(
    caseWhereUniqueInput: Prisma.CaseWhereUniqueInput,
  ): Promise<Case | null> {
    return this.prisma.case.findUnique({
      where: caseWhereUniqueInput,
    });
  }

  async cases(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CaseWhereUniqueInput;
    where?: Prisma.CaseWhereInput;
    orderBy?: Prisma.CaseOrderByWithRelationInput;
  }): Promise<Case[]> {
    const { skip, take, cursor, where, orderBy } = params ?? {};
    return this.prisma.case.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.CaseCreateInput): Promise<Case> {
    return this.prisma.case.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.CaseWhereUniqueInput;
    data: Prisma.CaseUpdateInput;
  }): Promise<Case> {
    const { where, data } = params;
    return this.prisma.case.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.CaseWhereUniqueInput): Promise<Case> {
    return this.prisma.case.delete({
      where,
    });
  }
}
