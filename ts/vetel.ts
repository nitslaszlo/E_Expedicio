export class Vetel {
   N: number;
   R: number;
   Ü: string;

   constructor(m: string[], ü: string) {
      this.N = parseInt(m[0]);
      this.R = parseInt(m[1]);
      this.Ü = ü;
   }

   public static op_Addition(v1: Vetel, v2: Vetel) : Vetel
   {
      let s: string = "";
      for (let i: number = 0; i < 90; i++){
         let ch: string = "#";
         if (v1.Ü[i] != "#") ch = v1.Ü[i];
         else if (v2.Ü[i] != "#") ch = v2.Ü[i];
         s += ch;
      }
      const m: string[] = ["0", "0"];
      return new Vetel(m, s);
   }

   public get MegfigyeltEgyedek(): string {
      let m: string[] = this.Ü.split(" ")[0].split("/");
      if ((m.length !== 2)) return "Nincs információ";
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