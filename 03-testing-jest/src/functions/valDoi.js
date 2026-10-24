function validarDoi (valor) {
                      if (!valor) return false;

        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        valor = valor.toUpperCase().trim();

        const dniRegex = /^[0-9]{8}[A-Z]$/;
        const nieRegex = /^[XYZ][0-9]{7}[A-Z]$/;

        let numero, letra, letraCalculada;


        if (dniRegex.test(valor)) {
        numero = valor.substring(0, 8);
        letra = valor.charAt(8);
        letraCalculada = letras[parseInt(numero, 10) % 23];
        return letra === letraCalculada;


        } else if (nieRegex.test(valor)) {
        let inicial = valor.charAt(0);
        numero = valor.slice(1, -1); // más claro: todo menos primera y última
        letra = valor.slice(-1);

        switch (inicial) {
            case "X": inicial = "0"; break;
            case "Y": inicial = "1"; break;
            case "Z": inicial = "2"; break;
        }

        const nieNumero = inicial + numero;
        letraCalculada = letras[parseInt(nieNumero, 10) % 23];
        return letra === letraCalculada;

        } else {
            return false;
        }
}


module.exports = validarDoi