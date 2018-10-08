import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { error } from "@angular/compiler/src/util";
import {tap } from 'rxjs/operators/tap'

@Injectable()

export class AppInterceptor implements HttpInterceptor{
    constructor(private router : Router, private cookieService : CookieService){}
    intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
        const strCookie = this.cookieService.get('userInfo');
        if(strCookie !=null){
            const loginResult = JSON.parse(strCookie);
            if(loginResult){
                const token = loginResult.token;
                const req = request.clone({
                    headers : new HttpHeaders().append('Authorization', 'token')
                });
                return next.handle(req).pipe(
                    tap(event =>{},
                    error=>{
                        if(error instanceof HttpResponse){
                            if(this.router.url.)
                        }
                    })
                );
            }
        }
        
        return next.handle(request);
    }

}