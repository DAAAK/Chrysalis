export interface IForm {
  handleGoogle?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: boolean;
  setType?: (type: boolean) => void;
  name?: string;
  setName?: (name: string) => void;
  email?: string;
  setEmail?: (email: string) => void;
  password?: string;
  setPassword?: (email: string) => void;
  subject?: string;
  setSubject?: (subject: string) => void;
  message?: string;
  setMessage?: (message: string) => void;
  handleSubmit?: (event: MouseEvent<HTMLButtonElement>) => void;
}
