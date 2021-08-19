export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
// eslint-disable-next-line @typescript-eslint/ban-types
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

interface LinkBase {
  id?: string;
  ariaLabel?: string;
  innerHtml: string;
}

export interface InternalLink extends LinkBase {
  routerLink: boolean;
  queryParams?: any;
}

export interface ExternalLink extends LinkBase {
  href: string;
  target?: '_self' | '_blank';
}

export type Link = XOR<InternalLink, ExternalLink>;
