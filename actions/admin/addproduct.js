import axios from "axios";
import Cookies from "js-cookie";
import serverurl from "../../serverurl";
export default async (data) => {
    console.log(Cookies.get('auth'))
    const options = {
        method: 'POST',
        url: `${serverurl}/admin/addproduct`,
        headers: {
            'auth-token':await( JSON.parse(Cookies.get('auth'))).authtoken
        },
        data: data
    };

    axios.request(options).then(function (response) {
        alert("product added successfully")
        return response.data;
    }).catch(function (error) {
        alert("some error occured")
        console.error(error);
    });
}