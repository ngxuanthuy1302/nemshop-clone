import { Method, request } from '../helper/request.helper';
import { IMenu } from '../interface/Menu.interface';

export class MenuAPI {
  static readonly COMPONENT_NAME: string = 'menus';

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

  static create = (data: IMenu) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data,
    });
  };

  static put = (data: IMenu) => {
    return request({
      method: Method.PUT,
      url: `/${this.COMPONENT_NAME}`,
      data,
    });
  };

  static update = (id: string, data: IMenu) => {
    return request({
      method: Method.PATCH,
      url: `/${this.COMPONENT_NAME}/${id}`,
      data,
    });
  };

  static delete = (id: string) => {
    return request({
      method: Method.DELETE,
      url: `/${this.COMPONENT_NAME}/${id}`,
    });
  };
}
