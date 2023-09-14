// https://on.cypress.io/api

describe("Page Loads", () => {
	before(() => {
		cy.visit("/");
	});

	it("Titles Exist", () => {
		let heading = cy.get(".mdi-home-floor-a");
		heading.should("be.visible");
	});

	it("Inputs Exist", () => {
		cy.get("#input-7");
		cy.get("#input-9");
		cy.get("#input-12");
	});

	it("Cards are Visible", () => {
		cy.get(".v-card").should("be.visible");
		cy.get(".v-card-title").should("be.visible");
	});

	it("Header Exist with a Button", () => {
		let header = cy.get("#app").find("header");
		header.should("be.visible");
		header.get("button");
	});

	it("Footer Exist with Buttons", () => {
		let footer = cy.get("#app").find("footer");
		footer.should("be.visible");
		footer.get("button");
	});
});
