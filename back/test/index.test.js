const app = require("../../front/src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
	describe("GET rickandmorty/{id}", () => {
		it("Responde con status: 200", () => {
			agent.get("/rickandmorty/1").expect(200);
		});
		// it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
		//    () => agent.get('/rickandmorty/1').toContain({body: 'id'} );
		//    () => agent.get('/rickandmorty/1').toContain({body: 'name'} );
		//    () => agent.get('/rickandmorty/1').toContain({body: 'species'} );
		//    () => agent.get('/rickandmorty/1').toContain({body: 'gender'} );
		//    () => agent.get('/rickandmorty/1').toContain({body: 'image'} );
		// })
		it("Si hay un error responde con status: 500", () => {
			agent.get("/rickandmorty/IDqueNoExiste").expect(500);
		});
	});
});
