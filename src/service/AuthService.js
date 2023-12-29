import axios from 'axios'
const axiosResponse = {
    data:'',
    error:'',
    status:false
}
const config = {
    headers: {
        "Content":"application/json"
    }
}

export const login = async (data)=>{
    try {
        const resp = await axios.post('/api/v1/login',data, config);
        return {
            data : resp.data?.user,
            status :  resp.data?.success
        };
    } catch (error) {
        const errorMessage = error?.response?.data?.msg? error.response.data.msg : error.message;
        return {
            ...axiosResponse,
            error: errorMessage ?? "Something went wrong!"
        }
    }
}
export const me = async ()=>{
    try {
        const resp = await axios.get('/api/v1/valid');
        return {
            data : resp.data?.user,
            status :  resp.data?.success
        };
    } catch (error) {
        const errorMessage = error?.response?.data?.msg? error.response.data.msg : error.message;
        return {
            ...axiosResponse,
            error: errorMessage ?? "Something went wrong!"
        }
    }
}