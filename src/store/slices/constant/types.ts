export type IinitialState = {
  token: string | null;
  user: object | null;
  error: {
      isError: boolean;
      msg: string;
  };
  isLoading: boolean;
};