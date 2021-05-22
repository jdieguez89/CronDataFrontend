import {StripeUserInfoType} from '../../shared/types/stripe/stripe-user-info.type';

export class Account {
  constructor(
    public activated?: boolean,
    public authorities?: string[],
    public email?: string,
    public firstName?: string,
    public langKey?: string,
    public lastName?: string,
    public login?: string,
    public imageUrl?: string,
    public cardExpireDate?: string,
    public cardNumber?: string,
    public cardSecureCode?: number,
    public password?: string,
    public phoneNumber?: string,
    public stripeInformation?: StripeUserInfoType
  ) {
  }
}
