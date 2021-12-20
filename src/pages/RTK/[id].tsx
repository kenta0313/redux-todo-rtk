import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useGetUserQuery } from '../../modules/api';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const RTK = () => {
  const router = useRouter();
  const user = router.query;
  const { data, error, isFetching } = useGetUserQuery(user.id ?? skipToken);

  if(isFetching && !data) {
    <div>ロード中</div>;
  }

  if(error) {
    <div>エラー</div>;
  }

  return (
    <div>
      <div>{data && data.name}</div>
    </div>
  );
};

export default RTK;
