
type User = {
  id: string,
  email: string,
  role: 'user' | 'admin',
  name: string,
  surname: string,
  createdAt: string,
  updatedAt: string,
};

export default User;
