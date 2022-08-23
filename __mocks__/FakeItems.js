export const fakeProductOne = {
  id: 1,
  name: "FakeProductOne",
  brand: "",
  description: "",
  photo: "https://picsum.photos/200",
  price: "1000",
  createdAt: "",
  updatedAt: "",
};

export const fakeProductTwo = {
  id: 2,
  name: "FakeProductTwo",
  brand: "",
  description: "",
  photo: "https://picsum.photos/200",
  price: "2",
  createdAt: "",
  updatedAt: "",
};

export const fakeCartItemOne = {
  ...fakeProductOne,
  quantity: 2,
};

export const fakeCartItemTwo = {
  ...fakeProductTwo,
  quantity: 3,
};
