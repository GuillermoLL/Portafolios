export class Proyect {
  constructor (
    public id: string,
    public name: string,
    public description: string,
    public topics: [string], // lista de frameworks
    public homepage: string, // ubicacion de la página
    public html_url: string, // url de git
    public img: any,
    public created_at: string,
  ){ }
}
