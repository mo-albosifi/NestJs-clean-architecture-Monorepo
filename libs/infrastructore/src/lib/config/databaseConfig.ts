import { DynamicModule } from "@nestjs/common";
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import { Book } from "libs/domain/src/lib/Entities/Book.entity";
export const DataBase_CONFIG : TypeOrmModuleOptions= 
{
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username:  "root",
    password: "",
    database: "test",
    synchronize: true,
    keepConnectionAlive: true,
    logging: false,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // entities: ['dist/libs/domain/src/lib/Entities/Book.entity.ts'],

    // entities: [
    //   IsolationsCenters ,
    //   Cities,Mahalas,
    //   ManagerAccount, IsolationsCenterUsers
    // ]
}

