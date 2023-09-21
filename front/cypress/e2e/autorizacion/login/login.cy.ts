import { autenticarLogin } from '../../funcionesLogin.cy';

describe('Login', () => {
    const usuario = 'admin';
    const contrasena = 'hola123';
    it('Validando usuario no Registrados ', () => {
        autenticarLogin('prueba1', '123456');
        cy.contains('Error: No se logró completar la operación. Unauthorized').should('be.visible');
    })

    it('Validando contraseña incorrecta', () => {
        autenticarLogin('admin', '1234567');
        cy.contains('Error: No se logró completar la operación. Unauthorized').should('be.visible');
    })
})
  