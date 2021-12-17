import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useGetUserQuery } from '../../modules/api';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const RTK = () => {
  const router = useRouter();
  const user = router.query;
  const { data, error, isFetching } = useGetUserQuery(user.id);

  return (
    <div>
      {error && <div>エラー</div>}
      {isFetching  && <div>ロード</div>}
      <h3>{data?.name}</h3>
    </div>
  );
};

export default RTK;
