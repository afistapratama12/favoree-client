import { Box, useQuery } from "react-query"
import { API } from "../API/api"
import { Axios } from "../API/axios"

export const Blog = () => {

    const { data, isLoading, isError } = useQuery("/v1/blogs/show", async () => {
        const { data } = await Axios.get(API.blogs.public)
        return data
    })
    
    
    return (
        <Box>
            ini Blog
        </Box>
    )
}