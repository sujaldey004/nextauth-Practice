import Email from "next-auth/providers/email";

export const NEXT_AUTH = {
    providers:{
        CredentialsProviders:{
            name:'Email',
            credentials:{
                email: {label: "email", type: 'text', placeholder:'sam2004@gmail.com'},
                password: {label: 'password', type: 'password', placeholder: 'asd123!@#'}
            }
        }
    }
}