using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;

namespace Erettsegi28_Expedíció
{
    class Vétel
    {
        public int N { get; private set; } //Nap sorszáma
        public int R { get; private set; } //Rádióamatőr száma
        public string Ü { get; private set; } //Rögzített üzenet

        public Vétel(string[] m, string ü)
        {
            N = int.Parse(m[0]);
            R = int.Parse(m[1]);
            Ü = ü;
        }

        public static Vétel operator + (Vétel v1, Vétel v2)
        {
            string s="";
            for (int i = 0; i < 90; i++)
            {
                char ch = '#';
                if (v1.Ü[i] != '#') ch = v1.Ü[i];
                else if (v2.Ü[i] != '#') ch = v2.Ü[i];
                s += ch;
            }
            return new Vétel(new string[] { "0", "0" }, s);
        }

        public string MegfigyeltEgyedek
        {
            get
            {
                string[] m = Ü.Split()[0].Split('/');
                if (m.Length != 2) return "Nincs információ";
                try { return  string.Format("A megfigyelt egyedek száma: {0}", int.Parse(m[0]) + int.Parse(m[1]) );  }
                catch (Exception) { return "Nincs információ"; }
            }
        }
    }

    class Radio
    {
        //6. feladat:
        static bool szame(string szo)
        {
            bool valasz = true;
            for (int i = 0; i < szo.Length; i++)
            {
                if (szo[i] < '0' || szo[i] > '9') valasz = false;
            }
            return valasz;
        }

        static void Main()
        {
            List<Vétel> v = new List<Vétel>();
            using (StreamReader sr = new StreamReader("veetel.txt")) { while (!sr.EndOfStream) v.Add(new Vétel(sr.ReadLine().Split(), sr.ReadLine())); }

            Console.WriteLine("2. feladat:\nAz első üzenet rögzítője: {0}\nAz utolsó üzenet rögzítője: {1}", v[0].R, v.Last().R);

            Console.Write("3. feladat:");
            Console.WriteLine(v.Where(x => x.Ü.Contains("farkas")).Aggregate("", (c, n) => c += String.Format("\n{0}. nap: {1}. rádióamatőr", n.N, n.R)));

            Console.WriteLine("4. feladat:");
            Array.ForEach(Enumerable.Range(1, 11).ToArray(), i => Console.WriteLine("{0}. nap: {1} rádióamatőr", i, v.Count(x => x.N == i)));

            List<string> ki = new List<string>();
            Array.ForEach(Enumerable.Range(1, 11).ToArray(), i => { if (v.Where(x => x.N == i).Count() > 0) ki.Add(v.Where(x => x.N == i).Aggregate((c, n) => c += n).Ü); });
            File.WriteAllLines("adaas.txt", ki);

            Console.WriteLine("7. feladat:");
            Console.Write("Adja meg a nap sorszámát! ");
            int sszN = int.Parse(Console.ReadLine());
            Console.Write("Adja meg a rádióamatőr sorszámát! ");
            int  sszR = int.Parse(Console.ReadLine());
            var f = v.Where(x => x.N == sszN && x.R == sszR);
            Console.WriteLine(f.Count()==0?"Nincs ilyen feljegyzés":f.First().MegfigyeltEgyedek);

            Console.ReadKey();
        }
    }
}
