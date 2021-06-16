export interface IProfile {
  id: number;
  name: string;
  age: number;
  address?: string; //?를 붙이면 속성을 모두 사용하지 않아도 된다.
  phone?: string;
}
