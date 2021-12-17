import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useGetUserQuery } from '../../modules/api';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const RTK = () => {
  const router = useRouter();
  const user = router.query;
  const { data, error, isFetching } = useGetUserQuery(user.id ?? skipToken);

  return (
    <div>
      {error ? (
        <div>エラー</div>
      ) : isFetching ? (
        <div>ロード中</div>
      ) : data ? <div>{data.name}</div>
      : <div>データなし</div>}
    </div>
  );
};

export default RTK;
