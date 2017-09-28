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
      const v: Vétel[] = [];
   }


}







// static void Main()
// {
  // List < Vétel > v = new List<Vétel>();
//   using(StreamReader sr = new StreamReader("veetel.txt"))
//   {
//      while (!sr.EndOfStream)
 //        v.Add(new Vétel(sr.ReadLine().Split(), sr.ReadLine()));
 //  }

 //  Console.WriteLine
// ("2. feladat:\nAz első üzenet rögzítője:{0}\nAz utolsó üzenet rögzítője:{1}", v[0].R, v.Last().R);

//   Console.Write("3. feladat:");