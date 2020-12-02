import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyInputDto } from './dto/company.input.dto';
import { CompanyPayloadDto } from './dto/company.payload.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  getCompanies() {
    return this.companyService.getAllCompanies();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createCompany(@Body() companyInput: CompanyInputDto) {
    return this.companyService.createCompany(companyInput);
  }

  @Patch(':id/update')
  updateCompany(
    @Body() data: CompanyPayloadDto,
    @Param('id') companyId: number,
  ) {
    return this.companyService.updateCompanyDetail({ data, companyId });
  }

  @Delete(':id')
  removeCompany(@Param('id') companyId: number) {
    return this.companyService.deleteCompany(companyId);
  }
}
