"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnect_1 = __importDefault(require("../../config/dbConnect"));
const Role_1 = __importDefault(require("./Role"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    roleId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    password: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    accessToken: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    verified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    timestamps: true,
    sequelize: dbConnect_1.default,
    underscored: false
});
User.belongsTo(Role_1.default, { foreignKey: "roleId" });
exports.default = User;
