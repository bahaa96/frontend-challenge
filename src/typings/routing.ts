import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type RouterParamList = {
  Home: {};
  Employee: { id: string  }
};

export type IPage<
  RouteName extends keyof RouterParamList
> = FC<RouteComponentProps<RouterParamList[RouteName]>>;
