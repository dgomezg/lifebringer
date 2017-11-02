var currentUser = WeDeploy.auth('auth-devoxx.liferay.com').currentUser;

if (currentUser) {
    runLifeBringer({
        currentUser: currentUser,
        weDeploy : WeDeploy
    });
}
else {
    document.location.href = '/';
}