for (i = 1; i <= 10; i++) {


    document.write(i, " JavaScript</br>"); //brojac, tj ispisi od 1 do 10 JavaScript - `i` je promenjiva, moze i bez `i` da se pise

}
document.write("</br>")

for (i = 5; i >= 1; i--) {

    document.writeln(i + "</br>"); // takodje brojac, samo oduzima
}

document.write("</br>")

for (i = 10; i <= 50; i += 3) {

    document.writeln(i + "</br>"); // svaki treci broj izbacuje
}

document.writeln("</br>")

for (i = 5; i <= 23; i += 2) {

    if (i % 2 != 0) document.writeln(i); //svaki drugi broj izbacuje, tj svaki negativan u ovom slucaju, ``uslov je da bude deljivo sa 2``
}

document.write("</br>")
document.write("</br>")

for (i = 13; i <= 33; i++) {

    if (i % 2 == 0 && i % 3 == 0) document.writeln(i); //ispisi svaki broj koji je deljiv i sa 2 i sa 3 izmedju 13 i 33; `&&` je I
}
document.write("</br>")
document.write("</br>")

for (zbir = 0, i = 1; i < 15; i++) {  //saberi sve brojeve od 1 do 14
    zbir = zbir + i;
}
document.writeln(zbir);


document.writeln("</br>")

for (proizvod = 1, i = 10; i <= 20; i++) {     // pomnozi sve neparne brojeve izmedju 10 i 20
    if (i % 2 == 1) proizvod *= i;
}
document.write("</br>" + proizvod);

document.writeln("</br>")

for (brojac = 0, i = 7; i <= 32; i++) {  // broji koliko je brojeva deljivo sa 5 izmedju 7 i 32

    if (i % 5 == 0) brojac++;
}
document.write("</br>" + brojac);