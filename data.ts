import { ProjectType, TechnologyType } from "./lib/types";

export const projectList: ProjectType[] = [
    {
        projectId: 1,
        title: "Test 1",
        detail: "Details 1",
        nameProjectOwner: "Name 1",
        technology: [ {techId: 1, title: 'Tech 1', version: "1" }, {techId: 2, title: 'Tech 2', version: "1" }]
    },
    {
        projectId: 2,
        title: "Test 2",
        detail: "Details 2",
        nameProjectOwner: "Name 2",
        technology: [ {techId: 2, title: 'Tech 2', version: "2" }]
    },
    {
        projectId: 3,
        title: "Test 3",
        detail: "Details 3",
        nameProjectOwner: "Name 3",
        technology: [ {techId: 3, title: 'Tech 3', version: "3" }]
    },
    {
        projectId: 4,
        title: "Test 4",
        detail: "Details 4",
        nameProjectOwner: "Name 4",
        technology: [ {techId: 4, title: 'Tech 4', version: "4" }]
    },
]

export const techList: TechnologyType[] = [
    {techId: 1, title: 'Tech 1', version: "1" }, 
    {techId: 2, title: 'Tech 2', version: "2" },
    {techId: 3, title: 'Tech 3', version: "3" },
    {techId: 4, title: 'Tech 4', version: "4" }]