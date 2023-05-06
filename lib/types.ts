export type ProjectType = {
    projectId: number,
    title: string,
    detail: string,
    nameProjectOwner: string,
    technology: TechnologyType[]
}

export type TechnologyType = {
    techId: number,
    title: string,
    version: string
}