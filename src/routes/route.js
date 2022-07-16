export const path = {
    home: '/',
    termAndCondition: '/term-and-condition',

    loginWriter: '/login-writer',

    blogDashboard : "/user/blog-dashboard",
    blogEdit : "/blog/edit/:id",
    blogPreview : "/blog/preview/:id",
    blog : "/blog/:slug", // preview for free users

    // admin page
    adminLogin: "/admin/login",
    adminOverview : "/admin",
    adminListTransaction : `/admin/list-transaction`,    

    processTransaction : `/transaction`,
    successTransaction : `/transaction/success`,

    any: '*'
}