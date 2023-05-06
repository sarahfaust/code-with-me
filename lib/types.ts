export type ProjectType = {
    id: number,
    title: string,
    detail: string,
    nameProjectOwner: string,
    technology: TechnologyType[]
}

export type TechnologyType = {
    id: number,
    title: string,
    version: string
}