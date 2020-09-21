export class Factura {
  constructor(
    public id: number,
    public creado: Date,
    public total: number,
    public empleado: string,
    public estado: number
  ) { }
}
