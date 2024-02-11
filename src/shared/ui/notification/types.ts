type TCard = {
  photo: string;
  name: string;
  status: string;
  time: string;
};

export type TNotification = {
  card: TCard;
  size?: 'xs' | 'sm';
  extraClass?: string;
};
