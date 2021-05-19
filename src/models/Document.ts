import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Document = sequelize.define('document', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  content: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default Document;
