export interface EmailFormData {
  email: string;
  mobile: string;
}

export interface Traveler {
  prefix: "Mr" | "Mrs" | "Master" | "Miss";
  firstName: string;
  lastName: string;
}

export interface TravelerFormData {
  room: {
    travelers: Traveler[];
    leadContactIndex?: string;
  }[];
}

export type FormProps<T> = {
  onSubmit: (_: T) => void;
  isActive: boolean;
  initialValues?: T;
};
