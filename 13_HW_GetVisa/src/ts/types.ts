export interface sampleObj {
  name: string[],
  money: number[],
  age: number[],
  document: string[],
  lang: string[]
}

export interface candidate {
  name: string,
  balance: string,
  age: string,
  document: string,
  lang: string
}

export interface circle {
  draw():void;
  success():void;
  failure():void;
}

