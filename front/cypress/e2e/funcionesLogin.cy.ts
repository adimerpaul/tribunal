export function autenticarLogin( usuario: string, contrasena: string){
    // console.log('hol',Cypress.env('url'));
    // cy.intercept('GET', Cypress.env('api') + 'login').as('paginaInicio');
    cy.intercept('http://localhost:4173/login').as('paginaInicio');
    cy.visit('/login');
    cy.get('input[aria-label=Usuario]').clear().click().type(usuario);
    cy.get('input[aria-label=Contraseña]').clear().click().type(contrasena);
    cy.get('i[class="q-icon on-left mdi mdi-login"]').click();
    cy.wait('@paginaInicio');
}