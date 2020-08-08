export class bmeData {
    public constructor(public temperature_C:number,
                       public humidity:number,
                       public pressure_hPa:number,
                       public model:string,
                       public heatIndex:number,
                       public dewPoint_C:number,
                       public altitude_M:number,
                       public temperature_F:number,
                       public pressure_Hg:number,
                       public fecha:Date) {

                       };
}