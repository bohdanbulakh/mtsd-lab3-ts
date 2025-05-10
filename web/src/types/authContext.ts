import { UserResponse } from '@mtsd-lab3/utils';

export type AuthenticationContextType = {
  user: UserResponse | null;
  isLoading: boolean;
  refetchUser: () => void;
};
