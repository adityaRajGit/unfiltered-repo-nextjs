import { jwtDecode } from "jwt-decode";

interface MyTokenPayload {
    userId: {
        name: string;
        email: string;
        _id: string;
        phone: string;
        username: string;
        profile_pic: string;
    };
    iat: number;
    role: string;
}


export const decodeToken = (token: string): MyTokenPayload | null => {
  try {
    const decoded = jwtDecode<MyTokenPayload>(token);
    return {
      ...decoded,
      userId: decoded.userId || (decoded as any).userIdObj?.userId,
    };
  } catch (error) {
    console.error("Token decoding failed:", error);
    return null;
  }
};