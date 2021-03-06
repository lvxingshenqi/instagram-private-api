import { User } from '../models/user';
import { AbstractFeed } from './abstract.feed';
export declare class AccountFollowingFeed extends AbstractFeed<User> {
    accountId: any;
    limit: number;
    constructor(session: any, accountId: any, limit?: number);
    get(): Promise<User[]>;
}
