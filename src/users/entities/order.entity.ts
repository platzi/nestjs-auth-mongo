import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Customer } from './customer.entity';

@Schema()
export class Order extends Document {
  @Prop({ type: Date })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  customer: Customer | Types.ObjectId;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
