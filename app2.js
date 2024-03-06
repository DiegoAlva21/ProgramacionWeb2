function tablaverdad(){
    console.log("A  |   B   |   A   AND B   |");
    const valores = [0,1];

    valores.forEach(A => {
        valores.forEach(B => {
            const AND = A && B;
            console.log(`${A}   |   ${B}    |   ${AND}  |`);

        })
    });
}
tablaverdad();
