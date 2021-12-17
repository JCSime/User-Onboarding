describe('User onboarding app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInputs = () => cy.get('input[name=first_name]');
    const emailInputs = () => cy.get('input[name=email]');
    const passwordInputs = () => cy.get('input[name=password]');
    const tosInputs = () => cy.get('[type="checkbox"]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');
    const foobarInput = () => cy.get('input[name=foobar]');

    it('sanity check to make sure tests work', () => {
        // 'it' is a test
        // expect is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5); // Strict equality ===
        expect({}).not.to.equal({}); // Strict equality {} !== {}
        expect({}).to.eql({}); // not strict ==
      })

    it('the proper elements are showing', () => {
        nameInputs().should('exist');
        emailInputs().should('exist');
        passwordInputs().should('exist');
        tosInputs().should('exist');
        foobarInput().should('not.exist');
    })
    
    it('can type in the inputs', () => {
        nameInputs()
        .should('have.value', '')
        .type('testUser')
        .should('have.value', 'testUser')

        emailInputs()
        .should('have.value', '')
        .type('lorem_ipsum@test.com')
        .should('have.value', 'lorem_ipsum@test.com')

        passwordInputs()
        .should('have.value', '')
        .type('password4321')
        .should('have.value', 'password4321')

        // tosInputs()
        // .should('not.be.visible')
        // .check(true)
        // .should('be.checked')
    })
    it('submit button starts out disabled', () => {
        submitBtn().should('be.disabled');
    })

    it('the submit button enables when all inputs are filled out', () => {
        nameInputs().type('testUser2');
        emailInputs().type('testUser2@test.com');
        passwordInputs().type('password123')
        submitBtn().should('not.be.disabled');
    })
    
})