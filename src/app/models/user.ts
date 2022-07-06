export interface User{
    username: string;
    password: string;
    grant_type?: string;
    scope?: string;
    client_id?: string;
    client_secret?: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export interface SignupRequest {
    first_name?: string;
    surname?: string;
    email: string;
    //request_role?: string;
    is_superuser?: boolean,
    is_user?: boolean,
    password: string
}
  