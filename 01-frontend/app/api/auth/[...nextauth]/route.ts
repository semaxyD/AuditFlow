import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Aquí se implementará la llamada al backend para autenticación
          const response = await fetch("http://localhost:3001/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });

          const user = await response.json();

          if (response.ok && user) {
            return user;
          }
          return null;
        } catch (error) {
          console.error("Error de autenticación:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
