export interface Agent {
  id: string;
  name: string;
  description: string;
  prompt: string;
  creator: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
}
