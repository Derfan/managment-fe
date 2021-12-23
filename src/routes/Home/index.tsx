import { useQuery } from "@apollo/client";
import { useContext } from "react";

import { GET_USERS } from '../../api';
import { AuthContext } from '../../modules';
import { Button, Loader } from '../../components';

export const HomeRoute = () => {
  const { isAuth } = useContext(AuthContext);
  const { data, loading, refetch } = useQuery(GET_USERS, { skip: !isAuth });
  
  return (
    <>
      {
        isAuth
          ? (
            <>
              {data?.users?.map(({ id, firstName, lastName,  }) => {
                return <div key={id}>{firstName} {lastName}</div>
              })}
              <Button onClick={() => refetch()} disabled={loading}>{loading ? <Loader /> : 'Get Users'}</Button>
            </>
          )
          : <p>Welcome, please authorize</p>
      }
    </>
  )
}

export default HomeRoute;
