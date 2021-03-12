import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer, CustomerSchema } from './entities/customer.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User, UserSchema } from './entities/user.entity';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { Order, OrderSchema } from './entities/order.entity';

import { ProductsModule } from './../products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],
  controllers: [CustomerController, UsersController, OrdersController],
  providers: [CustomersService, UsersService, OrdersService],
})
export class UsersModule {}
