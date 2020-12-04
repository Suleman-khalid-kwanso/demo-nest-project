import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyInputDto } from './dto/company.input.dto';
import { CompanyPayloadDto } from './dto/company.payload.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}

  async createCompany(payload: CompanyPayloadDto): Promise<string> {
    try {
      payload.photo = [...payload.photo];
      await this.companyRepository.save(payload);
      return 'Company has been created successfully !';
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_ACCEPTABLE);
    }
  }

  async getAllCompanies() {
    try {
      return await this.companyRepository.find({ relations: ['photo'] });
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }
  async updateCompanyDetail(payload: {
    companyId: number;
    data: CompanyInputDto;
  }): Promise<string> {
    try {
      const company = await this.companyRepository.findOne({
        where: { companyId: payload.companyId },
      });
      if (company) {
        await this.companyRepository.update(payload.companyId, payload.data);
        return 'Successfully updated !';
      }
      return 'Company Not Found !';
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_ACCEPTABLE);
    }
  }

  async deleteCompany(companyId: number) {
    try {
      await this.companyRepository.delete(companyId);
      return 'Successfully Deleted !';
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }
}
