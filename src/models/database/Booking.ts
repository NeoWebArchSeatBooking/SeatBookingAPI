import { DataTypes, Model } from 'sequelize';
import { sbConnector } from "../../helpers/DBProvider";

export class BookingModel extends Model{
  declare id: number
  declare bookingUserId: string
  declare bookingDate: string
  declare bookingStatus: string
  declare bookingLocId: string
  declare bookingBlockId: string
  declare bookingFloorId: string
  declare bookingSeatId: string
  declare bookingUpdateTime: string
}

BookingModel.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  bookingUserId: {
    type: DataTypes.STRING,
    field: 'booking_userid',
    allowNull: false
  },
  bookingDate: {
    type: DataTypes.DATEONLY,
    field: 'booking_date',
    allowNull: false
  },
  bookingStatus: {
    type: DataTypes.STRING,
    field: 'booking_status',
    allowNull: false,
    defaultValue: "A"
  },
  bookingLocId: {
    type: DataTypes.STRING,
    field: 'booking_seat_loc_id',
    allowNull: false
  },
  bookingBlockId: {
    type: DataTypes.STRING,
    field: 'booking_seat_block_id',
    allowNull: false
  },
  bookingFloorId: {
    type: DataTypes.STRING,
    field: 'booking_seat_floor_id',
    allowNull: false
  },
  bookingSeatId: {
    type: DataTypes.STRING,
    field: 'booking_seat_id',
    allowNull: false
  },
  bookingUpdateTime: {
    type: DataTypes.DATE,
    field: 'booking_updatetime',
    allowNull: false
  }
}, {
  sequelize: sbConnector,
  modelName: 'BookingModel',
  tableName: 'booking',
  timestamps: true,
  createdAt: false,
  updatedAt: 'booking_updatetime'
});
