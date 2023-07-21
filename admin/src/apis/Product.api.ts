import { Method, request } from '../helper/request.helper';
import { IProduct } from '../interface/Product.interface';

export class ProductAPI {
  static readonly COMPONENT_NAME: string = 'Products';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
      params: {
        filter: {
          order: 'createdAt DESC',
        },
      },
    });
  };

  static fetchAllMembers = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
      params: {
        filter: {
          include: 'members',
          order: 'createdAt DESC',
        },
      },
    });
  };
  static create = (data: IProduct) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data,
    });
  };

  static put = (data: IProduct) => {
    return request({
      method: Method.PUT,
      url: `/${this.COMPONENT_NAME}`,
      data,
    });
  };

  static update = (id: number, data: IProduct) => {
    return request({
      method: Method.PATCH,
      url: `/${this.COMPONENT_NAME}/${id}`,
      data,
    });
  };

  static delete = (id: number) => {
    return request({
      method: Method.DELETE,
      url: `/${this.COMPONENT_NAME}/${id}`,
    });
  };
}
