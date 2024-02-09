import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import { CreatePost, System } from './containers/Private';
import {
  Home,
  HomePage,
  Login,
  PostDetails,
  RentalApartment,
  RentalHouse,
  RentalRoom,
  RentalSpace,
} from './containers/Public';
import { paths } from './utils/constants';
import ManagePosts from './containers/Private/ManagePosts';
import UpdateUser from './containers/Private/UpdateUser';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-primary min-h-screen">
        <Routes>
          <Route path={paths.HOME} element={<Home />}>
            <Route path={'/'} element={<HomePage />} />
            <Route path={paths.HOME} element={<HomePage />} />
            <Route path={paths.LOGIN} element={<Login />} />
            <Route path={paths.CHO_THUE_CAN_HO} element={<RentalApartment />} />
            <Route path={paths.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
            <Route path={paths.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
            <Route path={paths.NHA_CHO_THUE} element={<RentalHouse />} />
            <Route path={paths.POST_DETAILS} element={<PostDetails />} />
          </Route>
          <Route path={paths.SYSTEM} element={<System />}>
            <Route path={paths.CREATE_POST} element={<CreatePost />} />
            <Route path={paths.MANAGE_POSTS} element={<ManagePosts />} />
            <Route path={paths.UPDATE_USER} element={<UpdateUser />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
