export class User {

  id: string;

  //用户名
  username: string;

  password: string;

  authority: string;

}

export enum UserRole {
  ADMIN, USER
}
