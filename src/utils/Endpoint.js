export const baseUrl = 'http://localhost:8800'

export const contactRoute = '/api/contact'
export const login = '/api/auth/admin/login'

// Guest Routes

export const registerRoute = "/api/register";

export const guestNewsRoute = "/api/news"; // <= + /:id

export const getSingleEventRoute = "/api/event"; // <= + /:id
export const getAllEventRoute = "/api/event";


// Member Routes

export const getSinglePublicationRoute = "/api/member/publication"; // <= + /:id
export const getAllPublicationRoute = "/api/member/publication";

export const getSingleNewsletterRoute = "/api/member/newsletter"; // <= + /:id
export const getAllNewsletterRoute = "/api/member/newsletter";

// Admin Routes

export const adminNewsRoute = "/api/admin/news";
