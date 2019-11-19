

export default ({ app }: {app: any}) => {
    app.router.beforeEach((to: any, from: any, next: any) => {
        // console.log(process.server)
        next();
    });
}