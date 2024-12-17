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
  paymentType: {
    credit: number;
    debit: number;
  };
  registrations: {
    customerRegistrations: number;
    totalRegistrations: number;
  };
  top10States: any;
  top10Ages: any;
  gender: any;
  devices: any;
  os: any;
};
