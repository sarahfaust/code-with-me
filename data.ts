type ProjectType = {
    id: number,
    title: string,
    detail: string,
    nameProjectOwner: string,
    technology: TechnologyType[]
}

type TechnologyType = {
    id: number,
    title: string,
    version: string
}

const ProjetList: ProjectType[] = [
    {
        id: 1,
        title: "Test 1",
        detail: "Details 1",
        nameProjectOwner: "Name 1",
        technology: [ {id: 1, title: 'Tech 1', version: "1" }]
    },
    {
        id: 2,
        title: "Test 2",
        detail: "Details 2",
        nameProjectOwner: "Name 2",
        technology: [ {id: 2, title: 'Tech 2', version: "2" }]
    },
    {
        id: 3,
        title: "Test 3",
        detail: "Details 3",
        nameProjectOwner: "Name 3",
        technology: [ {id: 3, title: 'Tech 3', version: "3" }]
    },
    {
        id: 4,
        title: "Test 4",
        detail: "Details 4",
        nameProjectOwner: "Name 4",
        technology: [ {id: 4, title: 'Tech 4', version: "4" }]
    },
]

export const techList: TechnologyType[] = [
    {id: 1, title: 'Tech 1', version: "1" }, 
    {id: 2, title: 'Tech 2', version: "2" },
    {id: 3, title: 'Tech 3', version: "3" },
    {id: 4, title: 'Tech 4', version: "4" }]