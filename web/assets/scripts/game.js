var currentUser = WeDeploy.auth('auth-codemotiongame.wedeploy.io').currentUser;

if (currentUser) {
    runLifeBringer({
        currentUser: currentUser,
        weDeploy : WeDeploy
    });
}
else {
    document.location.href = '/';
}