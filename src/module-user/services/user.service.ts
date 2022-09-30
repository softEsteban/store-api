import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DatabaseService } from 'src/module-database/services/database.service';
import DAssign from '../dtos/assign.dto';
import { DRole } from '../dtos/role.dto';
import DUser from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}
  /**
   * Gets all roles
   * @return Object with request status and
   * data if success
   * @memberof UserService
   * @author Esteban Toro
   */
  async listRoles() {
    let method = 'listRoles';
    try {
      let query = `SELECT id, TO_CHAR(datins, 'DD Mon YYYY HH:MM PM') as datins, name
                   FROM store_model.roles`;
      let result = await this.databaseService.queryDatabase(query);
      return {
        messg: `All roles retrieved successfully!`,
        data: result,
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }
  /**
   * Creates a new role
   * @param DRole DTO with new role information
   * @return Object with request status
   * @memberof UserService
   * @author Esteban Toro
   */
  async createRole(dRole: DRole) {
    let method = 'createRole';
    try {
      let uid = randomUUID();
      let query = `INSERT INTO store_model.roles (id, name, datins) 
                   VALUES ('${uid}', '${dRole.name}', NOW())`;
      this.databaseService.queryDatabase(query);
      return {
        messg: `Role ${uid} was created!`,
        data: '',
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }

  /**
   * Creates a new user
   * @param dUser DTO with new user information
   * @return Object with request status
   * @memberof UserService
   * @author Esteban Toro
   */
  async createUser(dUser: DUser) {
    let method = 'createUser';
    try {
      let uid = randomUUID();
      let query = `INSERT 
                   INTO store_model.users(id, document, name, lastname, password)
                   VALUES ('${uid}', '${dUser.document}', '${dUser.name}', '${dUser.lastname}', '${dUser.password}')`;
      this.databaseService.queryDatabase(query);
      return {
        messg: `User ${uid + '' + dUser.name + ' '} was created!`,
        data: '',
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }
  /**
   * Gets all users
   * @return Object with request status and
   * data if success
   * @memberof UserService
   * @author Esteban Toro
   */
  async listUsers() {
    let method = 'listUsers';
    try {
      let query = `SELECT id, name, lastname, document, role_id
                     FROM store_model.users`;
      let result = await this.databaseService.queryDatabase(query);
      return {
        messg: `All users retrieved successfully!`,
        data: result,
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }

  /**
   * Deletes a user
   * @param user_id User code
   * @returns Object with request status
   */
  async deleteUser(user_id: string) {
    let method = 'deleteUser';
    try {
      let query = `DELETE
                   FROM store_model.users
                   WHERE id = '${user_id}'`;
      let result = await this.databaseService.queryDatabase(query);
      return {
        messg: `User was deleted successfully!`,
        data: result,
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }

  /**
   * Assigns a role to a user
   * @param dAssing DTO with user and role id
   * @returns Object with request status
   */
  async assignRole(dAssing: DAssign) {
    let method = 'assignRole';
    try {
      let query = `UPDATE store_model.users
                   SET role_id = '${dAssing.role_id}'
                   WHERE id = '${dAssing.user_id}'`;
      let result = await this.databaseService.queryDatabase(query);
      return {
        messg: `Role has been assigned to user successfully!`,
        data: result,
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }
}
