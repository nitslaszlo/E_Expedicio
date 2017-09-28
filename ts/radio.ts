export class Radio {
   // függvény neve(paraméterezés:tipus,):fgv visszatérés típusa
   static szame(szo: string): boolean {
      let valasz: boolean = true;
      for (let i: number = 0; i < szo.length; i++) {
         if (szo[i] < "0" || szo[i] > "9") valasz = false;
      }
      return valasz;
   }



   public get MegfigyeltEgyedek(): string {
      let m: string[] = Ü.split[0].split(["/"][10]);
      if ((m.length !== 2)) {
         return "Nincs információ";
      }

      try {
         return string.Format("A megfigyelt egyedek száma: {0}" +
            (number.Parse(m[0]) + number.Parse(m[1])));
      }
      catch ( /*:Exception*/) {
         return "Nincs információ";
      }

   }
}








//   class Radio
 //   {
 //       static bool szame(string szo)
 //       {
 //            bool valasz = true;
 //           for (int i = 0; i < szo.Length; i++)
 //           {
 //               if (szo[i] < '0' || szo[i] > '9') valasz = false;
 //           }
 //           return valasz;
 //       }