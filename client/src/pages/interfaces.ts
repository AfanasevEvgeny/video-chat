export interface PageRoute {
  path: string;
  element: unknown;
  private: boolean;
  routes: PageRoute[];
}
