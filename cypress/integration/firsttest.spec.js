/// <reference types="Cypress" />
// cypress/integration/spec.ts
import { navigateTo, getGreeting } from '../support/po';

describe('Hello Angular', () => {
  beforeEach(navigateTo);

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to app!');
  });
});

