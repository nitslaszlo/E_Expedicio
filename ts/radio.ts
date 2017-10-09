import { Vetel } from "./vetel";
import * as fs from "fs";


export class Radio {
   // függvény neve(paraméterezés:tipus,):fgv visszatérés típusa
   static szame(szo: string): boolean {
      let valasz: boolean = true;
      for (let i: number = 0; i < szo.length; i++) {
         if (szo[i] < "0" || szo[i] > "9") valasz = false;
      }
      return valasz;
   }

   static Main(): void { 
      let v: Vetel[] = [];
      const fs: any = require("fs");
      const sorok: any = fs.readFileSync("veetel.txt").toString().split("\r\n");
      while (!fs.EndOfStream) v.push(new Vetel(fs.ReadLine().split(" "), fs.ReadLine()));
      console.log("2. feladat: \n Az első üzemet rögzítője: " + v[0].R + "\n Az utolsó üzenet rögzítője: " + v[length - 1].R);
//      Console.WriteLine("2. feladat:\nAz első üzenet rögzítője: {0}\nAz utolsó üzenet rögzítője: {1}", v[0].R, v.Last().R);


   }

}


