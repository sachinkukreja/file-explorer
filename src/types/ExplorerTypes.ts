export type TDirectory = {
    name : string,
    type: string,
    data? : TDirectory[]
    meta? : string
}