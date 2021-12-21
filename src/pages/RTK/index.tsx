import React from 'react';
import Link from 'next/link';
import { useGetUsersQuery } from '../../modules/api';

const RTK = () => {
  const { data, error, isFetching } = useGetUsersQuery();

  if(isFetching && !data) {
    return (
      <div>ロード中</div>
    );
  }

  if(error) {
    return (
      <div>エラー</div>
    );
  }

  return (
    <div>
      {data&& data.map((user, id) => (
      <div key={id}>
        <Link
          href={{
            pathname: '/RTK/[id]',
            query: {id: user.id}
          }}
        >
          {user.name}
        </Link>
      </div>
    ))}
    </div>
  );
};

export default RTK;
