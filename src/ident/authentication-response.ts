import { Token } from './token';
import { User } from './user';

export type AuthenticationResponse = {
  token: Token;
  user: User;
};
