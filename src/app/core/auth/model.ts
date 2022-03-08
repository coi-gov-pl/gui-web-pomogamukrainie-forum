export enum AuthSessionStorageKeys {
  ACCESS_TOKEN = 'access_token',
  ID_TOKEN_CLAIMS_OBJ = 'id_token_claims_obj',
}

export interface UserProfile {
  acr: string;
  at_hash: string;
  aud: string;
  auth_time: number;
  azp: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  first_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nonce: string;
  person_identifier: string;
  session_state: string;
  sid: string;
  sub: string;
  typ: string;
}
