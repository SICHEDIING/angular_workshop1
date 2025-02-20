// src/app/core/models/apartments.ts
export class Apartment {
  constructor(
    public id: number,
    public apartNum: number,
    public floorNum: number,
    public surface: number,
    public terrace: boolean,
    public surfaceterrace: number,
    public category: string,
    public ResidenceId: number
  ) {}
}
