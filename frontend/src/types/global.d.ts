interface AuthContextType {
  loading: boolean;
  data: UserData[] | null;
  token: string | null;
  dataToUpdate: { data: Blog; id } | null;
  login: ({ username, password }: Login) => Promise<void>;
  signup: ({ username, password }: Login) => Promise<void>;
  setLoading: (value: boolean) => void;
  createBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog, id: string) => void;
  deleteBlog: (id: string) => void;
  getBlogs: () => Promise<IBlog[] | undefined>;
  datasToUpdate: (blog: Blog, id: string) => void;
  logout: () => void;
}

interface Blog {
  title: string;
  content: string;
  paragraph: string;
}

interface IBlog {
  _id: string;
  userId: string;
  title: string;
  content: string;
  paragraph: string;
  createdAt: string;
  updatedAt: string;
}

interface UserData {
  Email: string;
  Password: string;
}

interface Login {
  username: string;
  password: string;
}

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}
