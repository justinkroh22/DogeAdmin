import { CustomClaims } from "./CustomClaims";

export class CustomFirebaseUserClass {


    customClaims?: CustomClaims;
    disabled?: boolean;
    displayName?: string;
    email?: string;
    emailVerified?: string;
    phoneNumber?: string;
    photoUrl?: string;
    providerId?: string;
    tenantId?: string;
    uid?: string;



    constructor(){


    }

    setName(displayName: string) {

        this.displayName = displayName;
    }


    getName() {

        return this.displayName;
    }

}