import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.MY_SOCIAL_BOOK_CLIENT_ID,
            clientSecret: process.env.MY_SOCIAL_BOOK_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)