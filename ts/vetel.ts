export class Vetel {
   N: number;
   R: number;
   Ü: string;

   constructor(n: number, r: number, ü: string) {
      this.N = n;
      this.R = r;
      this.Ü = ü;
   }


   public get MegfigyeltEgyedek(): string {
      let m: string[];
      m = this.Ü.split("/");
      if ((m.length !== 2)) {
         return "Nincs információ";
      }
      try {
         let x: string;
         x = "A megfigyelt egyedek száma: " + ((m[0]) + (m[1]));
         return x;
      }
      catch (Error) {
         return "Nincs információ";
      }
   }
}
//asdasdasdasdasds