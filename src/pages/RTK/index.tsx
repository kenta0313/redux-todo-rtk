import React from 'react';
import Link from 'next/link';
import { useGetUsersQuery } from '../../modules/api';

const RTK = () => {
  const { data, error, isFetching } = useGetUsersQuery();

  return (
    <div>
      {error && <div>エラー</div>}
      {isFetching  && <div>ロード</div>}
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
