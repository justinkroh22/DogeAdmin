export class FBUser {


    customClaims: any;
    disabled: boolean | null;
    displayName: string | null;
    email: string | null;
    emailVerified: boolean | null | undefined;
    phoneNumber: string | null | undefined;
    photoUrl: string | null | undefined;
    providerData: any;
    providerId: string | undefined;
    tenantId: string | null | undefined;
    tokensValidAfterTimestamp: any;
    uid: string | undefined;
    userMetadata: any;
    

    constructor(uid?: string, disabled?: any, displayName?: any, email?: any, 
        customClaims?: any, phoneNumber?: string | null, 
        emailVerified?: boolean | null, photoUrl?: string | null, providerId?: string, tenantId?: string | null, userMetadata?: any){
            
        this.uid = uid;
        this.disabled = disabled;
        this.displayName = displayName;
        this.email = email;
        this.customClaims = customClaims;
        this.emailVerified = emailVerified;
        this.phoneNumber = phoneNumber;
        this.photoUrl = photoUrl;
        this.providerId = providerId;
        this.tenantId = tenantId;
        this.userMetadata = userMetadata;

    }


}