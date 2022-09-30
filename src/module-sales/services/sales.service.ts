import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DatabaseService } from 'src/module-database/services/database.service';
import DSale from '../dtos/sale.dto';
import DSaleUpdate from '../dtos/sale.update.dto';

@Injectable()
export class SalesService {
  constructor(private databaseService: DatabaseService) {}
  /**
   * Gets all sales
   * @return Object with request status and
   * data if success
   * @memberof SalesService
   * @author Esteban Toro
   */
  async listSales() {
    let method = 'listSales';
    try {
      let query = `SELECT tsal.id, tsal.sale_at, 
                          TO_CHAR(sale_at, 'DD Mon YYYY HH:MM PM') AS sale_atf, 
                          tsal.product_id, tprod.name AS product_name,
                          tsal.user_id, tuser.name
                   FROM store_model.sales tsal,
                        store_model.users tuser,
                        store_model.products tprod
                   WHERE tsal.user_id = tuser.id
                   AND tprod.id = tsal.product_id`;
      let result = await this.databaseService.queryDatabase(query);
      return {
        messg: `All sales retrieved successfully!`,
        data: result,
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }

  /**
   * Creates a new sale
   * @param DSale DTO with new sale information
   * @return Object with request status
   * @memberof SalesService
   * @author Esteban Toro
   */
  async createSale(dSale: DSale) {
    let method = 'createSale';
    try {
      let uid = randomUUID();
      let query = `INSERT INTO store_model.sales (id, qty, sale_at, user_id, product_id) 
                   VALUES ('${uid}', '${dSale.qty}', NOW(), '${dSale.user_id}', '${dSale.product_id}')`;
      this.databaseService.queryDatabase(query);
      return {
        messg: `Sale ${uid} was created!`,
        data: '',
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }

  /**
   * Deletes a sale
   * @param sale_id Sale code
   * @returns Object with request status
   * @memberof SalesService
   * @author Esteban Toro
   */
  async deleteSale(sale_id: string) {
    let method = 'deleteSale';
    try {
      let query = `DELETE
                   FROM store_model.sales
                   WHERE id = '${sale_id}'`;
      let result = await this.databaseService.queryDatabase(query);
      return {
        messg: `Sale was deleted successfully!`,
        data: result,
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }

  /**
   * Updates a sale
   * @param dAssing DTO with data to update a sale
   * @returns Object with request status
   * @memberof SalesService
   * @author Esteban Toro
   */
  async updateSale(dSale: DSaleUpdate) {
    let method = 'updateSale';
    try {
      let query = `UPDATE store_model.sales
                   SET qty = '${dSale.qty}', user_id = '${dSale.user_id}', 
                   product_id = '${dSale.product_id}', update = NOW()
                   WHERE id = '${dSale.sale_id}'`;
      let result = await this.databaseService.queryDatabase(query);
      return {
        messg: `Sale has been updated successfully!`,
        data: result,
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }
}
