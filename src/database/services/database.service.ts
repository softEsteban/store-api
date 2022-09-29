import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { connection } from '../../../env-vars';

@Injectable()
export class DatabaseService {
  dbProvider: any;

  constructor() {}

  /**
   * Makes a sql query interaction with database
   * @param query
   * @return Rows if data is retrieved
   * @memberof DatabaseService
   * @author Esteban Toro
   */
  async queryDatabase(query: string) {
    let rows;

    this.buildConnection(connection);

    if (this.dbProvider) {
      const dbQuery = await this.dbProvider.useValue.query(query);
      rows = dbQuery.rows;
      return rows;
    }
  }

  /**
   * Creates a connection with database
   * @param connection Connection data
   */
  buildConnection(connection) {
    this.dbProvider = {
      provide: 'pgConnection',
      useValue: new Pool({
        user: connection.user,
        host: connection.host,
        database: connection.database,
        password: connection.password,
        port: connection.port,
      }),
    };
  }
}
