import { AllDiseases } from "../Views"
import { Articles } from "../Views"
import { CreateDisease } from "../Views"
import { EditDisease } from "../Views"

import { DiseaseBaseLayout } from "../Views"

import { AllSymptoms } from "../Views/Symptoms"
import { CreateSymptom } from "../Views/Symptoms"
import { EditSymptom } from "../Views/Symptoms"


export default [
    {
        path: "/diseases",
        component: DiseaseBaseLayout,
        name: "DiseaseBaseLayout",
        redirect: { name: "AllDiseases"},
        meta:{
            requiresAuth: true,
            title: "Diseases",

        }, 
        children: [
            {
                path: "/diseases/all-diseases",
                component: AllDiseases,
                name: 'AllDiseases',
                meta: {
                    title: "Disease List"
                }
            },
            {
                path: "/diseases/articles",
                component: Articles,
                name: 'Articles',
                meta: {
                    title: "Articles",
                    requiresAuth: true
                }
            },
            {
                path: "/diseases/create-disease",
                component: CreateDisease,
                name: 'CreateDisease',
                meta: {
                    title: "CreateDisease",
                    requiresAuth: true
                }
            },
            {
                path: "/diseases/edit-disease/:uuid",
                component: EditDisease,
                name: 'EditDisease',
                props: true,
                meta: {
                    title: "Edit Disease",
                    requiresAuth: true
                }
            },
            {
                path: "/symptoms/all-symptoms",
                component: AllSymptoms,
                name: 'AllSymptoms',
                meta: {
                    title: "Symptoms List",
                    requiresAuth: true
                }
            },
            {
                path: "/symptoms/create-symptom",
                component: CreateSymptom,
                name: 'CreateSymptom',
                meta: {
                    title: "Create Symptom",
                    requiresAuth: true
                }
            },
            {
                path: "/symptoms/edit-symptom/:uuid",
                component: EditSymptom,
                name: 'EditSymptom',
                props: true,
                meta: {
                    title: "Edit Symptom",
                    requiresAuth: true
                }
            },
        ]

    }
]