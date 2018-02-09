import {Injectable} from "@angular/core";
import {HttpService} from "../../providers/HttpService";
import {APP_SERVER_URL} from "../../providers/Constants";

@Injectable()
export class LoginService{
  constructor(private httpService : HttpService){

  }

  login(suburl,params){
    return this.httpService
      .post(APP_SERVER_URL + suburl,params);
  }
}
