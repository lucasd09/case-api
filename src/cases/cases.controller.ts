import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './dto/create.case.dto';
import { UpdateCaseDto } from './dto/update.case.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@Controller('cases')
@UseGuards(JwtAuthGuard)
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createCaseDto: CreateCaseDto) {
    return this.casesService.create(createCaseDto);
  }

  @Get()
  findAll() {
    return this.casesService.cases();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.casesService.case({ id: parseInt(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseDto: UpdateCaseDto) {
    return this.casesService.update({
      where: { id: parseInt(id) },
      data: updateCaseDto,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.casesService.delete({ id: parseInt(id) });
  }
}
