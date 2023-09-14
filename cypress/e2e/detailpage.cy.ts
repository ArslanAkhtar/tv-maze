describe("Content Detail", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Redirects to detail page", () => {
		cy.wait(1000);
		cy.get(".v-card img").eq(1).click();
		cy.get(".text-h4").should("be.visible");
	});

	it("Header Exist with a Button", () => {
		cy.get(".v-card img").eq(2).click();
		let header = cy.get("#app").find("header");
		header.should("be.visible");
		header.get("button");
	});
	it("Description is Visible", () => {
		cy.get(".v-card img").eq(1).click();
		cy.get(".text-p>p").should("be.visible");
	});

	it("Details are visible", () => {
		cy.wait(1000);
		cy.get(".v-card img").eq(2).click();
		cy.get(".show-detail").should("be.visible");
	});

	it("Seasons are visible", () => {
		cy.get(".v-card img").eq(3).click();
		cy.get(".seasons").should("be.visible");
	});

	it("Images are visible", () => {
		cy.get(".v-card img").eq(3).click();
		cy.get("img").should("be.visible");
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
