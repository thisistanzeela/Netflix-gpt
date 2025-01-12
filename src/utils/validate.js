export const checkValidDate = (email, password, name) => {
  const isUserNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  if (!isUserNameValid) return "User Name is not Valid";

  return null;
};
