import { Injectable } from "@angular/core";
import { AppInit2Service } from "./app-init2.service";

@Injectable()
export class AppInitService {
  constructor() {}

  Init(appInit2Service: AppInit2Service) {
    return new Promise<void>((resolve, reject) => {
      console.log("AppInitService.init() called");
      let str = "";
      appInit2Service
        .getThing()
        .then(res => {
          str = res;
          console.log(res);
        })
        .catch(msg => {
          console.log(msg);
        });
      setTimeout(() => {
        console.log("AppInitService Finished: " + str);
        if (str === "hello") {
          resolve();
        } else {
          reject();
        }
      }, 6000);
    });
  }
}
