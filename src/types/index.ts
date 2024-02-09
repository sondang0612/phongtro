export type Post = {
  id: string;
  description: string;
  star: string;
  address: string;
  title: string;
  categoryCode?: string;
  attributes: {
    acreage: string;
    hashtag: string;
    price?: string;
    published: string;
  };
  overview?: {
    code: string;
    type?: string;
    bonus?: string;
    area?: string;
    target?: string;
    created?: string;
    expired?: string;
  };
  images?: {
    image?: string[];
  };
  user: {
    name: string;
    phone: string;
    zalo: string;
  };
  label?: {
    value?: string;
    code?: string;
  };
};

export type Category = {
  code: string;
  value: string;
  label: string;
};

export type Province = {
  code: string;
  value: string;
};

export type Price = {
  code: string;
  value: string;
};

export type Area = {
  code: string;
  value: string;
};

export type User = {
  id: string;
  name: string;
  phone: string;
  zalo?: string;
  fbUrl?: string;
  avatar?: string;
};
