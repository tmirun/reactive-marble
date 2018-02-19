export class Payload {
  public range?: number;
  public value?: any;
  public color?: string;

  constructor (range, value, color) {
    this.range = range;
    this.value = value;
    this.color = color;
  }
}
