import { Prisma } from '@prisma/client';

export class CreateCaseDto implements Prisma.CaseCreateInput {
  name: string;
  bio: string;
  user: Prisma.UserCreateNestedOneWithoutCaseInput;
  portfolio?: Prisma.PortfolioCreateNestedManyWithoutCaseInput;
}
