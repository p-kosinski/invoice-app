interface ApiSettings {
  url: string;
  endpoints: {
    [property: string]: string;
  };
}

export const api: ApiSettings = {
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : ''),
  endpoints: {
    invoices: 'invoices'
  }
};