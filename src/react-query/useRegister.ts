import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import axiosInstance from 'src/axiosInstance';
import actionTypes from 'src/store/actions/actionTypes';
import queryKeys from './queryKey';

export type RegisterForm = {
  phone: string;
  name: string;
  password: string;
};

const register = async (form: RegisterForm) => {
  const response = await axiosInstance.post('/api/v1/auth/register', form);
  return response.data;
};

const useRegister = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: RegisterForm) => register(form),
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
        type: actionTypes.REGISTER_FAIL,
        data: null,
      });
    },
  });
};

export default useRegister;
