import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { UserAuthService } from "./user-auth.service";
import { catchError} from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private userAuthService:UserAuthService,
        private router:Router){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.")
        if(req.headers.get('No-Auth') === 'True'){
            return next.handle(req.clone());
        }

        const token = this.userAuthService.getToken();
        
        req = this.addToken(req,token);
        
        return next.handle(req).pipe(
            catchError(
                (err:HttpErrorResponse) => {
                    console.log(err.status);
                    if (err.status == 401) {
                        this.router.navigate(['/login'])
                    }else if(err.status == 403){
                        this.router.navigate(['/forbidden']);
                    }
                    return throwError("Something went wrong");
                }
            )
        );
    }

    private addToken(request:HttpRequest<any>, token:string){
        return request.clone(
            {
                setHeaders:{
                    Authorization : `Bearer ${token}`
                }
            }
        );
    }
    
}
//check whether it contains header like NO_AUTH --> we will not add jwtToken and it will return as it is