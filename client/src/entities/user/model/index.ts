export type User = {
    id: number;
    name: string;
    email:string;
    password: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
    accessToken: string;
    user: User;
}

export type AuthResponse = {
  accessToken: string;
  user: User;
};