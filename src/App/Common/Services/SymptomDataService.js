import axios from "@/App/Common/Helpers/Axios/axios"

let SymptomDataService = {
    methods: {
        getAllSDSre() {
            return axios.get("/symptom/admin/symptoms/get-all");
        }

    }
}

export default SymptomDataService;