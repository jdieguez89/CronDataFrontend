import {StripeProductType} from './stripe-product.type';

export class StripePricesType {
  active: true;
  billingScheme: string;
  created: number;
  currency: string;
  deleted: true;
  id: string;
  lastResponse: object;
  livemode: true;
  lookupKey: string;
  metadata: {
    additionalProp1: string,
    additionalProp2: string,
    additionalProp3: string
  };
  nickname: string;
  object: string;
  product: string;
  productObject: StripeProductType;
  tiers: {
    flatAmount: number,
    flatAmountDecimal: number,
    lastResponse: {},
    unitAmount: number,
    unitAmountDecimal: number,
    upTo: number
  } [];
  tiersMode: string;
  transformQuantity: {
    divideBy: number,
    lastResponse: {},
    round: string
  };
  type: string;
  unitAmount: number;
  unitAmountDecimal: number;
  recurring: {
    lastResponse: any,
    rawJsonObject: any,
    aggregateUsage: any,
    interval: string,
    intervalCount: 1
  };
}
