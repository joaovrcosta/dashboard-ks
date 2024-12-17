export type ProjectionData = {
  id: number;
  date: string;
  monthTotal: number;
  monthProjection: number;
  payed: number;
  payedProjection: number;
  markUp: number;
  cmvMonth: number;
  totalOrders: number;
  ticketMedio: number;
  repurchaseRate: number;
  billing: any;
  funnel: {
    visitors: number;
    viewProduct: number;
    addCart: number;
    checkout: number;
    purchase: number;
  };
};
