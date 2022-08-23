export interface AuthCardListProps {
  cardsListData: AuthCardProps[];
}

export interface AuthCardProps {
  title: string;
  description: string;
  rightImageSrc: string;
  disabled?: boolean;
  // done?
}
