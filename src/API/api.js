
export const API = {
    users: {
        base: `/users`,
        login: `/users/login`,
        register: `/users/register`
    },
    blogs: {
        base: `/blogs`,
        blogById: `/blogs/`,
        all: `/blogs/all`,
        public: `/blogs/show`,
        getBySlug: `/blogs/slug/`,
        edit: `/edit`,
        changeStatus : `/change_status/`
    }
}