export enum ProfileType {
  B2B = 'b2b',
  B2C = 'b2c'
}

export interface Profile {
  name: string;
  type?: ProfileType;
}
