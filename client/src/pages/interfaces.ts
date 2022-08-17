export interface PageRoute {
  path: string;
  element: any;
  private: boolean;
  children?: PageRoute[];
}
