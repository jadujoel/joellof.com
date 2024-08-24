declare type MimeTypes = 'application/json' | 'text/plain' | 'text/html' | 'multipart/form-data' | 'application/x-www-form-urlencoded';

declare type TypedFetch<T = any> = (
  url: string,
  options: TypedFetchOptions
) => Promise<TypedResponse<T>>;

declare interface TypedHeaders {
  'Content-Type': MimeTypes;
}

declare interface TypedFetchOptions {
  readonly method: TypedMethods,
  readonly headers: TypedHeaders,
  readonly body: string
}
declare type TypedMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

declare type TypedResponse<T> = Response & {
  json: () => Promise<T>;
};

/// stripe
declare var stripe: {
  readonly redirectToCheckout: StripeRedirectToCheckout
}

interface RedirectToCheckoutOptions {
  readonly sessionId: string;
}

type StripeRedirectToCheckout = (options: RedirectToCheckoutOptions) => Promise<StripeRedirectToCheckoutResponse>;

type StripeRedirectToCheckoutResponse = {
  readonly error?: {
    readonly message: string;
  };
}

interface StripeCheckoutSession {
  readonly id: string;
}
