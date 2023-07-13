import { UseQueryOptions } from '@tanstack/react-query';

export type TFetchListParams<Response, Params> = {
  params?: Params;
  options?: UseQueryOptions<Response, string>;
};

export type TFetchDetailParams<Response, Params, Id = string> = {
  id: Id;
  params?: Params;
  options?: UseQueryOptions<Response, string>;
};
