import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultUser & {
      id: string;
    };
  }
}

type MiddlewareMeta = boolean | {
  unauthenticatedOnly: true,
  navigateAuthenticatedTo?: string,
}

declare module '#app/../pages/runtime/composables' {
  interface PageMeta {
    auth?: MiddlewareMeta
  }
}
