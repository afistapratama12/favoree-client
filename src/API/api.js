
export const API = {
    users : {
        base : "/users",
        login : `/users/login`,
        register : `/users/register`,
    },
    admin : {
        login :`/users/login`,
        ip_check : `/users/ip_address/check`,
    },
    transactions : {
        base : `/transactions`,
        last : `/transactions/last`,
        create: `/transactions/create`,
        confirm_paid : `/confirm_paid`,
        cancel : `/cancel`,
    }
    // blogs: {
    //     base: `/blogs`,
    //     blogById: `/blogs/`,
    //     all: `/blogs/all`,
    //     public: `/blogs/show`,
    //     getBySlug: `/blogs/slug/`,
    //     edit: `/edit`,
    //     changeStatus : `/change_status/`
    // },
}