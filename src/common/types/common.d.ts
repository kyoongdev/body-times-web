export type PagingDTO<T> = {
  data: T[];
  paging: {
    total: number;
    page: number;
    limit: number;
    hasPrev: boolean;
    hasNext: boolean;
  };
};
