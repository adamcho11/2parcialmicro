const {validarReserva} = require ("../src/horario");
const {haySolapamiento} = require ("../src/horario");
describe("validarReserva", () => {
    test("reserva valida", () => {
        expect(validarReserva(8,12));
    });
    test("reserva de mas de 4 horas", () => {
        expect(() => validarReserva(8,16)).toThrowError('horario invalido');
    });
    test("reserva fuera de horario", () => {
        expect(() => validarReserva(2,4)).toThrowError('horario invalido');
    });
    test("reserva a la misma hora inicial", () => {
        expect(() => validarReserva(8,8)).toThrowError('horario invalido');
    });
    test("dos reservas que se superponen ", () => {
        const reservaA = {inicio: 8, fin:10};
        const reservaB = {inicio: 8, fin:10};
        expect(haySolapamiento(reservaA,reservaB)).toBe(true);
    });
    test("dos reservas contiguas", () => {
        const reservaA = {inicio: 8, fin:10};
        const reservaB = {inicio: 10, fin:12};
        expect(haySolapamiento(reservaA,reservaB)).toBe(false);
    });
});