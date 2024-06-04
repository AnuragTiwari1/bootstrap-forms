export interface EmailFormData {
  email: string;
  mobile: string;
}

export interface Traveler {
  prefix: "Mr" | "Mrs" | "Master";
  firstName: string;
  lastName: string;
  isLeadContact: boolean;
}

export interface TravelerFormData {
  room: Traveler[][];
}

export type FormProps<T> = {
  onSubmit: (_: T) => void;
  isActive: boolean;
  initialValues?: T;
};
