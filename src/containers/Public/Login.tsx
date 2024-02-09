import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useLogin from 'src/react-query/useLogin';
import useRegister from 'src/react-query/useRegister';
import Swal from 'sweetalert2';
import { Button, InputForm } from '../../components';
const initialPayload = {
  name: '',
  phone: '',
  password: '',
};
const Login = () => {
  const location = useLocation();
  const [payload, setPayload] = React.useState(initialPayload);
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state: any) => state.auth);
  const { mutate: login } = useLogin();
  const { mutate: register } = useRegister();
  const [isRegister, setIsRegister] = React.useState(
    location.state?.isRegister
  );
  const handleSubmit = async () => {
    const finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    isRegister ? register(finalPayload as any) : login(finalPayload);
  };

  React.useEffect(() => {
    setIsRegister(location.state?.isRegister);
  }, [location.state?.isRegister]);

  React.useEffect(() => {
    setPayload(initialPayload);
  }, [isRegister]);

  React.useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  React.useEffect(() => {
    msg && Swal.fire('Oop !', msg, 'error');
  }, [msg, update]);

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && (
          <InputForm
            label="HỌ TÊN"
            value={payload.name}
            setValue={setPayload}
            keyPayload="name"
          />
        )}
        <InputForm
          label="SỐ ĐIỆN THOẠI"
          value={payload.phone}
          setValue={setPayload}
          keyPayload="phone"
        />
        <InputForm
          label="MẬT KHẨU"
          value={payload.password}
          setValue={setPayload}
          type="password"
          keyPayload="password"
        />
        <Button
          text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
          onClick={handleSubmit}
        />
      </div>
      <div className="flex justify-between items-center mt-7">
        {isRegister ? (
          <small>
            Bạn chưa có tài khoản?
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => setIsRegister(false)}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <span className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </span>
            <span
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => setIsRegister(true)}
            >
              Tạo tài khoản mới
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
