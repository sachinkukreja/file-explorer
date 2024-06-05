export type TDirectory = {
    name : string,
    type: string,
    data? : TDirectory[]
    meta? : string
}

export enum DirectoryType {
   FILE = "file",
   FOLDER = "folder"
}