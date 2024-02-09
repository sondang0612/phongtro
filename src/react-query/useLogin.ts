import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import axiosInstance from 'src/axiosInstance';
import actionTypes from '../store/actions/actionTypes';
import queryKeys from './queryKey';

export type LoginForm = {
  phone: string;
  password: string;
};

const login = async (form: LoginForm) => {
  const response = await axiosInstance.post('/api/v1/auth/login', form);
  return response.data;
};

const useLogin = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: LoginForm) => login(form),
    onSuccess: (data) => {
      if (data.err === 0) {
        dispatch({
          type: actionTypes.REGISTER_SUCCESSFUL,
          data: data.token,
        });
        queryClient.setQueryData([queryKeys.useCurrentUser], data.user);
      } else {
        const msg = data.msg;
        dispatch({
          type: actionTypes.REGISTER_FAIL,
          data: msg,
        });
      }
    },
    onError: () => {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: null,
      });
    },
  });
};

export default useLogin;
