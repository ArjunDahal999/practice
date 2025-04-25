import { Injectable, Inject } from '@nestjs/common';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import {
  FindManyOptions,
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from 'typeorm';
import { IPaginated } from './paginater.interface';
import { URL } from 'url';
import { th } from '@faker-js/faker/.';

@Injectable()
export class PaginationProvider {
  constructor(@Inject(REQUEST) private readonly request: Request) {}
  public async paginateQuery<T extends ObjectLiteral>(
    paginationQueryDto: PaginationQueryDto,
    repository: Repository<T>,
    relations?: FindOptionsRelations<T>,
    where?: FindOptionsWhere<T>,
    select?: FindOptionsSelect<T>,
  ): Promise<IPaginated<T>> {
    const findOption: FindManyOptions = {
      take: paginationQueryDto?.limit,
      skip: (paginationQueryDto?.page! - 1) * paginationQueryDto?.limit!,
    };
    if (relations) {
      findOption.relations = relations;
    }

    if (where) {
      findOption.where = where;
    }
    if (select) {
      findOption.select = select;
    }
    const result = await repository.find(findOption);
    const totalItems = await repository.count();
    const totalPage = Math.ceil(totalItems / paginationQueryDto.limit!);

    const currentPage = paginationQueryDto.page;

    const nextPage =
      currentPage! === totalPage ? currentPage : currentPage! + 1;
    const prevPage = currentPage! === 1 ? currentPage : currentPage! - 1;
    const lastPage = totalPage;
    const firstPage = 1;
    const baseUrl =
      this.request.protocol + '://' + this.request.headers.host + '/';
    const newUrl = new URL(this.request.url, baseUrl);

    const response: IPaginated<T> = {
      data: result,
      meta: {
        itemsPerPage: paginationQueryDto?.limit!,
        totalItems: totalItems,
        currentPage: paginationQueryDto?.page!,
        totalPage: totalPage!,
      },
      links: {
        current: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${paginationQueryDto.page}`,
        first: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${firstPage}`,
        last: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${lastPage}`,
        next: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${nextPage}`,
        previous: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${prevPage}`,
      },
    };
    return response;
  }
}
