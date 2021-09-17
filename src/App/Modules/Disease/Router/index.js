import { AllDiseases } from "../Views"
import { Articles } from "../Views"
import { CreateDisease } from "../Views"
import { EditDisease } from "../Views"

import { AllSymptoms } from "../Views/Symptoms"
import { CreateSymptom } from "../Views/Symptoms"
import { EditSymptom } from "../Views/Symptoms"

export default [
    {
        path: "/all-diseases",
        component: AllDiseases,
        name: 'AllDiseases',
        meta: {
            title: "Disease List"
        }
    },
    {
        path: "/articles",
        component: Articles,
        name: 'Articles',
        meta: {
            title: "Articles",
            requiresAuth: true
        }
    }, 
    {
        path: "/create-disease",
        component: CreateDisease,
        name: 'CreateDisease',
        meta: {
            title: "CreateDisease"
        }
    },
    {
        path: "/edit-disease",
        component: EditDisease,
        name: 'EditDisease',
        meta: {
            title: "Edit Disease"
        }
    },
    {
        path: "/all-symptoms",
        component: AllSymptoms,
        name: 'AllSymptoms',
        meta: {
            title: "Symptoms List"
        }
    }, 
    {
        path: "/create-symptom",
        component: CreateSymptom,
        name: 'CreateSymptom',
        meta: {
            title: "Create Symptom"
        }
    },
    {
        path: "/edit-symptom",
        component: EditSymptom,
        name: 'EditSymptom',
        meta: {
            title: "Edit Symptom"
        }
    },
]