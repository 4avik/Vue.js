import {fakeStoreAPI} from "../fakeStoreService"; /*1st lvl*/

const getProducts = async () => {
    try {
        const response = await fakeStoreAPIget("/products");
        return response.data; /*.data*/
    } catch (error) {
        throw new Error(error)
    }
}