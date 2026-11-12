const request = require("supertest");
const { crearApp } = require("../src/app");

test("registra un prestamo y publica su evento", async () => {
  const publicar = jest.fn().mockResolvedValue(true);
  const respuesta = await request(crearApp({ publicar }))
    .post("/reservas")
    .send({ laboratorio: "1", docente: "x", correo: "a@a.com", inicio:8, fin:10 });

  expect(respuesta.status).toBe(201);
  expect(publicar).toHaveBeenCalledWith(
    "reserva.registrado",
    expect.objectContaining({ reservaId: respuesta.body.id }),
  );
});




