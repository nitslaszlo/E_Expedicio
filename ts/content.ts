import * as http from "http";
import * as url from "url";
import * as fs from "fs";
import { Vetel } from "./vetel";


export class Content {
    // 6. feladat:
    static szame(szo: string): boolean {
        let valasz: boolean = true;
        for (let i: number = 0; i < szo.length; i++) {
            if (szo[i] < "0" || szo[i] > "9") valasz = false;
        }
        return valasz;
    }

    Content(req: http.ServerRequest, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<form style='font-size:16px; background: LightGray'>");
        res.write("<pre style='font-family: Courier'>");

        const v: Vetel[] = [];
        const sorok: string[] = fs.readFileSync("veetel.txt").toString().split("\r\n");
        let nap: number;
        let radios: number;
        const sor2: string = "";
        sorok.forEach((i) => {
            if (i.length > 0) {
                if (i.length < 90) {
                    const m: string[] = i.split(" ");
                    nap = parseInt(m[0]);
                    radios = parseInt(m[1]);
                } else {
                    v.push(new Vetel(nap, radios, i));
                }
            }
        });

        // 2. feladat:
        res.write("2. Feladat:<br>");
        res.write(`Első üzenetet rögzítette: ${v[0].radios}`);
        res.write(`<br>Utolsó üzenetet rögzítette: ${v[v.length - 1].radios}`);

        // 3. feladat:
        res.write("<br>\n3. Feladat:<br>");
        v.forEach((i) => {
            if (i.uzenet.search(/farkas/gi) !== -1) {
                res.write(i.nap + ". nap " + i.radios + ". rádióamatőr<br>");
            }
        });

        // 4. feladat:
        res.write("\n4. Feladat:<br>");
        const napok: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        v.forEach((i) => {
            napok[i.nap - 1]++;
        });
        for (let i: number = 0; i < 11; i++) {
            res.write((i + 1) + ". nap: " + napok[i] + " rádióamatőr<br>");
        }

        // 5. feladat
        res.write("\n5. Feladat: <br>");
        const length: number = v.length;
        const ws: fs.WriteStream = fs.createWriteStream("adaas.txt");
        for (let i: number = 1; i < 12; i++) {
            let uzenet: string[] = [];
            let irva: boolean = false;
                       for (let k: number = 0; k < length; k++) {
                if (v[k].nap === i) {
                    if (!irva) {
                        irva = true;
                        uzenet = v[k].uzenet.split("");
                    } else {
                        const aktualis: string[] = v[k].uzenet.split("");
                        for (let q: number = 0; q < 90; q++) {
                            if (aktualis[q] !== "#") {
                               uzenet[q] = aktualis[q];
                            }
                        }
                    }
                }
            }
            ws.write(`${i}. nap: ${uzenet.join("")}\r\n`);
        }

        res.write("</pre></form>");

        // 7. feladat:
        res.write("7. feladat:\nAdja meg a nap sorszámát!\n");
        res.write('<input name="sszN" type="number">');
        res.write("7. feladat:\nAdja meg a rádióamatőr sorszámát!\n");
        res.write('<input name="sszR" type="number">');
        for (let i: number; i < v.length; i++) {
            if (v[i].nap === sszN && v[i].radios === sszR) {
                res.write(v[i].nap + " " + v[i].radios);
            }
            else res.write("Nincs ilyen feljegyzés!");
        }
        res.end();
    }
}
