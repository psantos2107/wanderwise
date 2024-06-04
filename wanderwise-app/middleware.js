//whatever routes you put in matcher are the routes that the middleware will be called in, so think about which routes you want to use

//commented out for now.

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/trip/:path*", "/user_page"],
};
