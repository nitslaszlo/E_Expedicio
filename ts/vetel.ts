export class Vetel {
   nap: number;
   radios: number;
   uzenet: string;
   azon: string;

   constructor(nap: number, radios: number, sor: string) {
      this.azon = nap.toString() + radios.toString();
      this.nap = nap;
      this.radios = radios;
      this.uzenet = sor;
   }
}