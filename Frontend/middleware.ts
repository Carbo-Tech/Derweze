import { withAuth } from "next-auth/middleware"

export const config = { matcher: ["/user/:path*"] }
export default withAuth({})