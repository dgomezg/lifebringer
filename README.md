# Ray's Lifebringer - Wedeploy 

![Ray's Lifebringer](https://raw.githubusercontent.com/sammso/lifebringer/master/web/assets/sprites/logo-720.png)

Ray's Lifebringer is a game inspired by the the life giving atmosphere at Liferay, Inc. Go ahead and save the world by bringing all the zombies back to life.

## Customize for Events

To customize your lifebringer game to match the details of your event, you just need to update a few peices of code inside of the `lifebringer/web` folder within the project source code. To begin you need to clone this repo to your local machine so that you can edit it.

### 1. Event Name/Prizes

Within the `web/index.html` file, we find a `<p>` element that contains all the unique information about the event. Feel free to update that with the name and specific prizes/timeline of your event.

### 2. User Account Details

Each event will require unique information that you want to gather from the users of the game. Underneath the section that we edited above, you can see a list of `<input>` elements that contain the inputs of the user form. You can just delete or add any inputs that you don't want besides the email, password, and name inputs which are **required** for the account creation.

```html
<input name="name" type="text" placeholder="Name" required>
<input name="email" type="email" placeholder="Email" required>
<input name="password" type="password" placeholder="Password" required>
<div class="terms">
    <input name="terms" type="checkbox" value="Yes" required>
    <p class="terms">I agree to the <a target="_blank" href="/terms/">terms</a>.</p>
</div>
```

If you change the form input, then you need to update what you save to the database so that it matches. You can do this by going to `web/assets/home.js` file and updating the `createUser` function.

```javascript
function createUser(form) {
    return auth.createUser({
        id: window.md5(form.email.value),
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        terms: form.terms.value
    });
}
```

A good example of an easy way to edit this is by disabling the Terms agreement. To do this, you would delete the `<div class="terms"></div>` component (with all it's contents) and the `terms: form.terms.value` line (along with the comma on the password line).

### 3. WeDeploy Project

The Lifebringer game, user authentication, and database runs on WeDeploy so you will need to [have an account](https://console.wedeploy.com/signup) before proceeding.

First, you must go to the [WeDeploy Console](https://console.wedeploy.com) and create a new project (maybe the name of your event). Then you can use the name of this project to update the variables in the `web/assets/scripts/globals.js` file. Most likely, just changing the `project_id` variable will be enough.

```javascript
const project_id = "projectId";
const data_endpoint = `https://db-${project_id}.wedeploy.io`;
const auth_endpoint = `https://auth-${project_id}.wedeploy.io`;
```

**Optional**: There is also an optional Admin site that allows you to control some peices of the game's database. In order to set that up correctly, you must go to `lifebringer/admin/main.js` and update the global variables.

```javascript
const project_id = "projectID";
const master_token = "masterToken";
```

The master token of your project can be found on the WeDeploy console under the _Settings_ tab.

### Deploy

Now you are ready to deploy with the [WeDeploy CLI](https://wedeploy.com/docs/intro/using-the-command-line/#1). Go to the root of your `lifebringer` project in your terminal and run `we deploy -p yourProject`. 

### BONUS: Custom Domain

On the [WeDeploy Console](https://console.wedeploy.com), go to the `web` service and select the _Custom Domains_ tab. Here you can add a custom domain for your project.

Even if you don't buy/coordinate a special domain for your game, you can still make the url more beautiful and easier for your users to use. One way to do this is by shortening your `web` service domain from [web-yourproject.wedeploy.io](web-yourproject.wedeploy.io) to [yourproject.wedeploy.io](yourproject.wedeploy.io). This is free to do on WeDeploy and will make your URL easier to use and share.

## How to play!

You are Ray. Ray uses his Liferay gun to protect himself and the world from malicious zombies. Bring all the zombies back to life with your Liferay. Don't let the zombies get you or get past you. The world is counting on you to save them.

* Controls:
	* Use arrow keys to move Ray.
	* Use space key to shoot the Liferay gun.
	* With mobile phone use touch buttons on screen
    * Go for the combos

## Original version

(https://github.com/mthadley/lzs)
