import { jwtDecode } from "jwt-decode";

interface MyTokenPayload {
  userId?: {
    name: string;
    email: string;
    _id: string;
    phone: string;
    username: string;
    profile_pic: string;
  };
  userIdObj?: {
    userId: MyTokenPayload["userId"];
  };
  iat: number;
  role: string;
}



export const decodeToken = (token: string): MyTokenPayload | null => {
  try {
    return jwtDecode<MyTokenPayload>(token);
  } catch (error) {
    console.error("Token decoding failed:", error);
    return null;
  }
};
