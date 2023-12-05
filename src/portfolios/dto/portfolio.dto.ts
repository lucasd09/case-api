import { Prisma } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePortfolioDto implements Prisma.PortfolioCreateInput {
  title: string;
  description: string;
  image: string;
  link: string;
  case?: Prisma.CaseCreateNestedOneWithoutPortfolioInput;
}

export class UpdatePortfolioDto extends PartialType(CreatePortfolioDto) {}
