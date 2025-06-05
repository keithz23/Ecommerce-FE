export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  username?: string;
}

export interface AuthResponse {
  data: {
    statusCode: string;
    data: User;
    message: string;
    isAuthenticated?: boolean;
  };
}

export interface LoginWithGoogleResponse {
  clientId: string;
  crendential: string;
  selectBy?: string;
}
