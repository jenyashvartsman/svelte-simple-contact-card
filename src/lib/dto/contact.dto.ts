export interface ContactDto {
  firstName: string;
  lastName: string;
  fullName: string;
  image: string;
  birthday: Date;
  emailAddress: string;
  phoneNumber: {
    mobile: string;
  };
  job: {
    title: string;
    company: string;
  };
  address: {
    street: string;
    city: string;
    country: string;
  };
}
