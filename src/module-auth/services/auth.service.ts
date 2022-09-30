import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/module-database/services/database.service';

@Injectable()
export class AuthService {
  constructor(private databaseService: DatabaseService) {}

  /**
   * Gets a user role
   * @param user_id User code
   * @returns User role if success
   */
  async getRoleByUser(user_id: string) {
    let method = 'getRoleByUser';
    try {
      let query = `SELECT role_id
                   FROM store_model.users
                   WHERE id = '${user_id}'`;
      let result = await this.databaseService.queryDatabase(query);
      if (result[0]) {
        return result[0]['role_id'];
      }
      return '';
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }
  /**
   * Validates if user role can access a url
   * @param user_id User code
   * @param url Enpoint path
   * @return Boolean
   * @memberof AuthService
   * @author Esteban Toro
   */
  async validateUrlAccessByUser(user_id: string, url: string) {
    let method = 'validateUrlAccessByUser';
    try {
      let role = await this.getRoleByUser(user_id);
      let query = `SELECT (access ->> 'url_access')::jsonb AS url_access
                   FROM store_model.roles
                   WHERE id = '${role}'`;
      let result = await this.databaseService.queryDatabase(query);
      let obj = result[0];
      for (let item of obj['url_access']) {
        if (item == url) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }
}
