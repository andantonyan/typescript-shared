export interface User {
  username: string;
}

export interface UserService {
  getUser(): User;
}

export class UserServiceImpl implements UserService {
  getUser(): User {
    return {
      username: 'Test'
    };
  }
}
