import { Vetel } from "./vetel";
import * as fs from "fs";
import { List } from 'linqts';


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

      console.log("3. feladat:");
      console.log(v.Where(x => x.Ü.Contains("farkas")).Aggregate("", (c, n) => c += string.Format("\n" + n.N + ". nap " + n.R + ". rádióamatőr")));
      
    //4. feladat.
      console.log("4. feladat:");
       
      var ki: string[];
     // ki.push('elem'); - Hozzáadás listához.
      
     import fs = require('fs');
     fs.readFileSync('adaas.txt', 'utf8'); 
      
     //7. feladat:
     console.log("7. feladat:");
     console.log("Adja meg a nap sorszámát!");
     var sszN: number; 
   }

}


