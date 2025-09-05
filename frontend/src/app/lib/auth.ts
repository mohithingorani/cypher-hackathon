// @ts-nocheck
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Email", type: "text", placeholder: "Email" },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //       placeholder: "Password",
    //     },
    //   },
    //   async authorize(credentials: any) {
    //     const username = credentials.username;
    //     const password = credentials.password;

    //     //database check logic
    //     //if credentials are right
    //     return {
    //       id: "user1",
    //       username: "mohit",
    //       //return user credentials from database you want in the token
    //     };
    //     // else f
    //     // return null
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //@typescript-eslint/ban-ts-comment
    async session({ session, token }: any) {
      console.log(session);
      if (session && session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
    
    async signIn({ profile }: any) {
      console.log(123);
    try{
      const email = profile.email;
      const name = profile.name;
      const picture = profile.picture;
      const user = await axios.post(
        `https://wellnest.api.mohit-hingorani.tech/user`,
        {
          name,
          email,
          password: "",
          phoneNumber: 123123123123,
        }
      );
      if (user) {
        return true;
      } else {
        return false;
      }
    }catch(err){
      console.log(error);
      return false;
    }
    },
  },
  pages: {
    signIn: "/login",
  }
};
