const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id:987,
    name:'Sol',
    species:'Human',
    gender:'Female',
    status:'Dead Inside',
    origin:{ name:'Earth C-137'},
    image: 'image.jpg'
};

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200);
        });

        it("Responde un objeto con las propiedas: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'.", async () => {
            const response = await request.get('/rickandmorty/character/1')
            for(const prop in character){
                expect(response.body).toHaveProperty(prop);
            };
        });
        
        it("Si hay un error respondecon status: 500", async () => {
            const response = await request.get('/rickandmorty/character/99k')
            expect(response.statusCode).toBe(500);
        });
    });

    describe("GET /rickandmorty/login", () => {
        const access = { access: true };

        it("Responde con la propiedad access de un objeto en true si la informacion del usuario es válida", async () =>{
            const response = await request.get('/rickandmorty/login?email=fsrodriguezmol@gmail.com&password=190502Sol')
            expect(response.body).toEqual(access);
        });

        it("Responde con la propiedad access de un objeto en false si la informacion del usuario es inválida", async () => {
            const response = await request.get('/rickandmorty/login?email=fsrodriguezmol@gmail.com&password=19052Sl')
            access.access = false;
            expect(response.body).toEqual(access);
        });
    });

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el pesonaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character);
        });

        it("Debe agregar personajes a favoritos sin quitar los existentes", async () => {
            character.id = 1928;
            character.name = 'Phil';
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        });
    });

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/2gh56');
            expect(response.body.length).toBe(2);
        });

        it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/1928');
            expect(response.body.length).toBe(1);
        });
    });
});