export interface BodyRequestCreateUser{
    username: string,
    password: string
}

export interface RequestLoginUser{
    username:string,
    password:string
}
export interface ResponseCreateUser{
    token: string,
    message: string,
}

export interface ResponseLoginUser{
    token: string,
    message: string,
}