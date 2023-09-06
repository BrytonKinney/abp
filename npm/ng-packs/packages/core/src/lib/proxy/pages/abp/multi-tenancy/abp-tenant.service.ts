import { Injectable } from '@angular/core';
import { RestService } from '../../../../services/rest.service';
import type { FindTenantResultDto } from '../../../volo/abp/asp-net-core/mvc/multi-tenancy/models';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbpTenantService {
  apiName = 'abp';

  findTenantById = (id: string) =>
    this.restService.request<any, FindTenantResultDto>(
      {
        method: 'GET',
        url: `/api/abp/multi-tenancy/tenants/by-id/${id}`,
      },
      { apiName: this.apiName },
    );

  findTenantByName = (name: string) =>
    this.restService.request<any, FindTenantResultDto>(
      {
        method: 'GET',
        url: `/api/abp/multi-tenancy/tenants/by-name/${name}`,
      },
      { apiName: this.apiName },
    ).pipe(tap((res) => console.log(res)));

  constructor(private restService: RestService) {}
}
