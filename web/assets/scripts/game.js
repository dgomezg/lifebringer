var currentUser = WeDeploy.auth(auth_endpoint).currentUser;

if (currentUser) {
    runLifeBringer({
        currentUser: currentUser,
        weDeploy : WeDeploy
    });
}
else {
    document.location.href = '/';
}