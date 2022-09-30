import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DatabaseService } from 'src/module-database/services/database.service';
import DProduct from '../dtos/product.dto';

@Injectable()
export class ProductsService {
  constructor(private databaseService: DatabaseService) {}
  /**
   * Gets all products
   * @return Object with request status and
   * data if success
   * @memberof ProductsService
   * @author Esteban Toro
   */
  async listProducts() {
    let method = 'listProducts';
    try {
      let query = `SELECT *
                   FROM store_model.products`;
      let result = await this.databaseService.queryDatabase(query);
      return {
        messg: `All products retrieved successfully!`,
        data: result,
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }
  /**
   * Creates a new product
   * @param DProduct DTO with new product information
   * @return Object with request status
   * @memberof ProductsService
   * @author Esteban Toro
   */
  async createProduct(dProduct: DProduct) {
    let method = 'createProduct';
    try {
      let uid = randomUUID();
      let query = `INSERT INTO store_model.products (id, name, description, price) 
                   VALUES ('${uid}', '${dProduct.name}', '${dProduct.description}', ${dProduct.price})`;
      await this.databaseService.queryDatabase(query);
      return {
        messg: `Product ${uid} was created!`,
        data: '',
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }

  /**
   * Deletes a  product
   * @param product_id Product code
   * @return Object with request status
   * @memberof ProductsService
   * @author Esteban Toro
   */
  async deleteProduct(product_id: string) {
    let method = 'deleteProduct';
    try {
      let query = `DELETE
                   FROM store_model.products 
                   WHERE id = '${product_id}'`;
      await this.databaseService.queryDatabase(query);
      return {
        messg: `Product ${product_id} was deleted!`,
        data: '',
        result: true,
      };
    } catch (error) {
      console.log(`Error at ${method}:` + error);
    }
  }
}
