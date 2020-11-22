
export interface AuthResponse {
  user: User;
  token: string;


}

export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  othername: string;
  user_type: string;
  phoneNumber: string;
  email: string;
  password: string;

  createdAt: string;
  roles: string[];
  isAdmin: boolean;
}
