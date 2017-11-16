var currentUser = WeDeploy.auth('auth-codemotion.wedeploy.io').currentUser;

if (currentUser) {
    runLifeBringer({
        currentUser: currentUser,
        weDeploy : WeDeploy
    });
}
else {
    document.location.href = '/';
}