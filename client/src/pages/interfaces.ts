export interface PageRoute {
  path: string;
  element: never;
  private: boolean;
  routes: PageRoute[];
}
