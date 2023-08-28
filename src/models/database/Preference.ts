import { DataTypes, Model } from 'sequelize';
import { dbProvider } from "../../dataaccess/providers"

export class PreferenceModel extends Model{
  
  declare id: number
  declare userId: string
  declare preferenceType: string
  declare preferenceValue: string
  declare preferenceActive: string
}

PreferenceModel.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.STRING,
    field: 'user_id',
    allowNull: false
  },
  preferenceType: {
    type: DataTypes.STRING,
    field: 'preference_type',
    allowNull: false
  },
  preferenceValue: {
    type: DataTypes.STRING,
    field: 'preference_value',
    allowNull: false
  },
  preferenceActive: {
    type: DataTypes.STRING,
    field: 'preference_active',
    allowNull: false
  }
}, {
  sequelize: dbProvider.getSBDBConnector(),
  modelName: 'PreferenceModel',
  tableName: 'preference',
  timestamps: true,
  createdAt: false,
  updatedAt: false
});


