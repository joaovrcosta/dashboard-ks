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
  billing: Array<{
    date: string;
    desktop: number;
    mobile: number;
    tablet: number;
  }>;
  funnel: {
    visitors: number;
    viewProduct: number;
    addCart: number;
    checkout: number;
    purchase: number;
  };
  paymentType: Array<{
    month: string;
    desktop: number;
  }>;
  registrations: {
    customerRegistrations: number;
    totalRegistrations: number;
  };
  top10States: Array<{
    month: string;
    desktop: number;
  }>;
  top10Ages: Array<{
    month: string;
    desktop: number;
  }>;
  gender: Array<{
    browser: string;
    visitors: number;
    fill: string;
  }>;
  devices: Array<{
    browser: string;
    visitors: number;
    fill: string;
  }>;
  os: Array<{
    month: string;
    desktop: number;
  }>;
};
