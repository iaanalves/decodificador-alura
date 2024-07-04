import initCopiarTexto from './modules/copiar-texto.js';
import { criptografa, descriptografa } from './modules/cripto-logica.js';
import { initCriptografaTexto, initDescriptografaTexto } from './modules/cripto-utils.js';

// Inicializa a função de cópia de texto
initCopiarTexto();

// Função para criptografar texto
criptografa(initCriptografaTexto);

// Função para descriptografar texto
descriptografa(initDescriptografaTexto);