import {UsersActionsTypes} from "./users-actions";

export interface UserGeo {
  lat: string;
  lng: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeo;
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

export interface UsersState {
  users: User[]
  loading: boolean
  error: null | string
}

export interface addUsers {
  type: UsersActionsTypes.ADD_USERS,
  payload: User[]
}

export type UsersAction = addUsers

