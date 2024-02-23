export type TPost = {
  id: number;
  title: string;
  tags: string;
  reactions: number;
  body: string;
  userId: number;
};

export type TPosts = {
  posts: TPost[];
  total: number;
  skip: number;
  limit: number;
};

export type TUser = {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: string,
  email: string,
  phone: string,
  username: string,
  password: string,
  birthDate: string,
  image: string,
  bloodGroup: string,
  height: number,
  weight: number,
  eyeColor: string,
  hair: {
    color: string,
    type: string
  },
  domain: string,
  ip: string,
  address: {
    address: string,
    city: string,
    coordinates: {
      lat: number,
      lng: number
    },
    postalCode: number,
    state: string
  },
  macAddress: string,
  university: string,
  bank: {
    cardExpire: string,
    cardNumber: number,
    cardType: string,
    currency: string,
    iban: string
  },
  company: {
    address: {
      address: string,
      city: string,
      coordinates: {
        lat: number,
        lng: number
      },
      postalCode: number,
      state: string
    },
    department: string,
    name: string,
    title: string
  },
  ein: string,
  ssn: string,
  userAgent: string
}
