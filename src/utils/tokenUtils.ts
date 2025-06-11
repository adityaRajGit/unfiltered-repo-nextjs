export const validateToken = (token: string): boolean => {
  try {
    if (token.split('.').length !== 3) return false;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return !!payload.userId;
  } catch (error) {
    console.log(error);
    return false;
  }
};