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
    const decoded = jwtDecode<MyTokenPayload>(token);
    return {
      ...decoded,
      userId: decoded.userId || decoded.userIdObj?.userId,
    };
  } catch (error) {
    console.error("Token decoding failed:", error);
    return null;
  }
};
