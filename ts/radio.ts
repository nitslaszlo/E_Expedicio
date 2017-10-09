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
      //   using(StreamReader sr = new StreamReader("veetel.txt"))
 //     { while (!sr.EndOfStream) v.Add(new Vétel(sr.ReadLine().Split(), sr.ReadLine())); }

   }

}


