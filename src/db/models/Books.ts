'use strict';

import { DataTypes, Model, Optional } from "sequelize";
import connection from "./index";

export interface BooksAttributes {
  id?: number;
  title?: string;
  author?: string;
  publisher?: string;
  year?: number;
  price?: number;
  quantity?: number;
  active?: boolean;

  createAt?: Date;
  updateAt?: Date;
}

export type BooksInput = Optional<BooksAttributes, 'id'>
export type BooksOutput = Required<BooksAttributes>

class Books extends Model<BooksAttributes, BooksInput> implements BooksAttributes {
  id!: number;
  title!: string;
  author!: string;
  publisher!: string;
  year!: number;
  price!: number;
  quantity!: number;
  active!: boolean;
  public readonly createAt!: Date
  public readonly updateAt!: Date
}

Books.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING
  },
  publisher: {
    allowNull: false,
    type: DataTypes.STRING
  },
  year: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  }
}, {
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Books