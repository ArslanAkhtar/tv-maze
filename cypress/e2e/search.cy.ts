describe("Search Content", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Header Exist on Page", () => {
		let header = cy.get("#app").find("header");
		header.should("be.visible");
		header.get("button");
	});

	it("Search By Title", () => {
		cy.wait(1000);
		cy.get("#input-7").type("Game{enter}");
		cy.contains(".v-card-title", "Game");
	});

	it("Search By Genre", () => {
		cy.get('[aria-owns="v-menu-11"]').click();
		cy.wait(1000);
		cy.get('.v-select__content input[tabindex="-1"]').eq(2).click();
		cy.get(".v-card-title"); //Cards exist
	});

	it("Search By Rating", () => {
		cy.get('[aria-owns="v-menu-14"]').click();
		cy.wait(1000);
		cy.get(".v-list-item").eq(2).click();
		cy.get(".v-card-title"); //Cards exist
	});

	it("Valid Search By All Filter", () => {
		cy.wait(2000);
		cy.get("#input-7").type("Game{enter}");
		cy.get('[aria-owns="v-menu-11"]').click();
		cy.wait(1000);
		cy.get('.v-select__content input[tabindex="-1"]').eq(2).click();
		cy.get('[aria-owns="v-menu-14"]').click();
		cy.get(".v-list-item").eq(1).click();
		cy.get(".v-card-title"); //Cards exist
	});

	it("Invalid Search By All Filter", () => {
		cy.wait(2000);
		cy.get("#input-7").type("xyza{enter}");
		cy.get('[aria-owns="v-menu-11"]').click();
		cy.wait(1000);
		cy.get('.v-select__content input[tabindex="-1"]').eq(2).click();
		cy.get('[aria-owns="v-menu-14"]').click();
		cy.get(".v-list-item").eq(5).click();
		cy.get(".no-data-found").contains("No data found"); //No Cards exist
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
