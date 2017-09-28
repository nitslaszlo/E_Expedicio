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
         return string.Format("A megfigyelt egyedek száma: {0}", (m[0]) +
            (m[1]));
      }
      catch (Error) {
         return "Nincs információ";
      }
   }
}