import * as http from "http";
import * as url from "url"; // űrlapokhoz, input kiolvasás
import * as fs from "fs"; // file-kezelés
import { Vetel } from "./vetel";

export class Content {

    Content(req: http.ServerRequest, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Hello TypeScript!</p>");
        const v: Vetel[] = [];
        const sorok: string[] = fs.readFileSync("veetel.txt").toString().split("\r\n");
        let nap: number;
        let radios: number;
        let sor2: string;
        sorok.forEach((i) => {
            if (i.length > 0) {
                if (i.length < 90) {
                    const m = i.split(" ");
                    nap = parseInt(m[0]);
                    radios = parseInt(m[1]);
                } else {
                    v.push(new Vetel(nap, radios, i));
                }
            }
        });

        res.write("2. Feladat:<br>");
        res.write(`Első üzenetet rögzítette: ${v[0].radios}<br>Utolsó üzenetet rögzítette: ${v[v.length - 1].radios}`);

        res.write("<br>3. Feladat:<br>");
        //const keres = /apples/gi; 
        v.forEach((i) => {
            if (i.uzenet.search(/farkas/gi) != -1) {
                res.write(i.nap + ". nap " + i.radios + ". rádióamatőr<br>");
            }
        });

        res.write("4. Feladat:<br>");
        let napok: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        v.forEach((i) => {
            napok[i.nap - 1]++;
        });
        for (let i = 0; i < 11; i++) {
            res.write((i + 1) + ".nap: " + napok[i] + " rádióamatőr<br>");
        }

        res.end();
    }
}

