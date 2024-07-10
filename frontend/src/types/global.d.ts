interface AuthContextType {
  loading: boolean;
  data: UserData[] | null;
  token: string | null;
  login: ({ username, password }: Login) => void;
  signup: ({ username, password }: Login) => void;
  logout: () => void;
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
