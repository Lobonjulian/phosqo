export interface Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly image: string;
  readonly tint: "violet" | "blue" | "magenta" | "green";
  readonly badge?: string;
  readonly description: string;
}
