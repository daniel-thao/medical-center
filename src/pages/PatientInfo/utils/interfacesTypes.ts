export interface IMultiplePhoneNum {
  [key: string]: string;
}

export interface IMultipleOpenAndCloseTimes {
  weekday: string;
  weekend: string;
}

export interface ISingleResource {
  clinicName: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string | IMultiplePhoneNum;
  openTime?: string | IMultipleOpenAndCloseTimes;
  closeTime?: string | IMultipleOpenAndCloseTimes;
}

export interface IMappedSingleResource {
  [key: number]: ISingleResource;
}

export interface ICategoryResource {
  [key: string]: IMappedSingleResource;
}

export interface IResourceCategoryRender {
  resourceCategory: string;
  resourceIndex: number;
}

export interface IResourceMultipleOpenAndCloseTimes {
  weekday: string;
  weekend: string;
}
