import {Entity, model, property} from '@loopback/repository';

@model()
export class RolMenu extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  guardar: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  editar: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  listar: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  eliminar: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  descargar: boolean;

  @property({
    type: 'number',
  })
  rolId?: number;

  @property({
    type: 'number',
  })
  menuId?: number;

  constructor(data?: Partial<RolMenu>) {
    super(data);
  }
}

export interface RolMenuRelations {
  // describe navigational properties here
}

export type RolMenuWithRelations = RolMenu & RolMenuRelations;
