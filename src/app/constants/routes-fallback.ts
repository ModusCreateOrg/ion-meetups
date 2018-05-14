export const ROUTES_FALLBACK = [{
    old: '/tabs/events/events',
    new: '/tabs/(events:event-list)'
}, {
    old: '/tabs/events/event-detail/:id',
    new: '/tabs/(events:event-detail/:id)'
}, {
    old: '/tabs/users/users',
    new: '/tabs/(users:user-list)'
}, {
    old: '/tabs/users/users/:email',
    new: '/tabs/(users:user-detail/:email)'
}, {
    old: '/tabs/about/about',
    new: '/tabs/(about:about)'
}];

