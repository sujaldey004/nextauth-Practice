import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
    providers:[
        CredentialsProvider({
            name:'Email',
            credentials:{
                email: {label: "email", type: 'text', placeholder:'sam2004@gmail.com'},
                password: {label: 'password', type: 'password', placeholder: 'asd123!@#'}
            },
            async authorize(credentials : any){
              console.log(credentials)
              return {
                email: credentials.email
              }
            }
        })
    ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    session:(session, token, user)=>{
      console.log(session);
      if(session && session.user){
        session.id = token.sub 
      }
      return session
    }
  },
  pages:{
    signin: "/signin"
  }
}
