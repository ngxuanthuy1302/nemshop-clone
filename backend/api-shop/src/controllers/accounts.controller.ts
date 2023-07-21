import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  Where,
  repository,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Accounts} from '../models';
import {AccountsRepository} from '../repositories';
// ----------------------------------

export class AccountsController {
  constructor(
    @repository(AccountsRepository)
    protected accountsRepository: AccountsRepository,
  ) {}

  @post('/accounts')
  @response(200, {
    description: 'Accounts model instance',
    content: {'application/json': {schema: getModelSchemaRef(Accounts)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Accounts, {
            title: 'NewAccounts',
            exclude: ['id'],
          }),
        },
      },
    })
    accounts: Omit<Accounts, 'id'>,
  ): Promise<Accounts> {
    return this.accountsRepository.create(accounts);
  }

  @get('/accounts/count')
  @response(200, {
    description: 'Accounts model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Accounts) where?: Where<Accounts>): Promise<Count> {
    return this.accountsRepository.count(where);
  }

  @get('/accounts')
  @response(200, {
    description: 'Array of Accounts model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Accounts, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Accounts) filter?: Filter<Accounts>,
  ): Promise<Accounts[]> {
    return this.accountsRepository.find(filter);
  }

  @patch('/accounts')
  @response(200, {
    description: 'Accounts PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Accounts, {partial: true}),
        },
      },
    })
    accounts: Accounts,
    @param.where(Accounts) where?: Where<Accounts>,
  ): Promise<Count> {
    return this.accountsRepository.updateAll(accounts, where);
  }

  @get('/accounts/{id}')
  @response(200, {
    description: 'Accounts model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Accounts, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Accounts, {exclude: 'where'})
    filter?: FilterExcludingWhere<Accounts>,
  ): Promise<Accounts> {
    return this.accountsRepository.findById(id, filter);
  }

  @patch('/accounts/{id}')
  @response(204, {
    description: 'Accounts PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Accounts, {partial: true}),
        },
      },
    })
    accounts: Accounts,
  ): Promise<void> {
    await this.accountsRepository.updateById(id, accounts);
  }

  @put('/accounts/{id}')
  @response(204, {
    description: 'Accounts PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() accounts: Accounts,
  ): Promise<void> {
    await this.accountsRepository.replaceById(id, accounts);
  }

  @del('/accounts/{id}')
  @response(204, {
    description: 'Accounts DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.accountsRepository.deleteById(id);
  }
}
