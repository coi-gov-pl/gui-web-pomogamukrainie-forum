# Pomagam Ukrainie

## Initial setup

To run the project, first install Node.js v16 (Latest LTS: Gallium) but not older than v16.14.0.

Below, you'll find two sections - one describes how to run the project locally, another one how to work with GitHub forks to prepare a pull request.

## Running the project locally

To run the project, first install dependencies:

```
npm install
```

and then run the dev server:

```
npm start
```

That just fires up the frontend; you also need to run the backend.

You have a choice to run the mocked or full backed. The mocked setup is simpler.

After running one of the backends, you should see the app running at http://localhost:4200/.

### Mocked backend

To run the mocked backend, open a separate terminal & run:

```
npm run start:mock
```

### Full backend

To run the full backend, first clone the backend project from https://github.com/coi-gov-pl/pomocua-ogloszenia. Then, follow the prerequisites from its README.

Then, run the backend by following the [Running API with database and Swagger (without keycloak)](https://github.com/coi-gov-pl/pomocua-ogloszenia/blob/develop/README.md#running-api-with-database-and-swagger-without-keycloak) section.

To have an up-to-date backend, remember to periodically pull from that repo.

IMPORTANT: after a pull, the dev server often stops working properly. When that happens, stop the server, then run:

```
./cleanup_docker.sh
```

in the backend repo and then start the server again.

Once you have the backend running, in a separate terminal (this will be the third one) run:

```
npm run start:proxy
```

## Working with GitHub forks

Most contributors don't have write access to the repository. To be able to make changes and submit PRs, you need to fork the repository and setup proper branch tracking.

### Initial setup

To fork the repository, click the "Fork" button near the top-right corner of the page. Choose your private account where the fork will go.

Then, go to your clone; the URL should be something like https://github.com/YOUR_GITHUB_NICK/gui-web-pomogamukrainie-forum. Clone that repository by copying the repo URL from the green `<>` button and running:

```
git clone PASTE_REPO_URL_HERE
```

Then, enter the directory of the repository you just cloned in the terminal.

Your fork is now tracked in your local repo clone as `origin`. We want to add another remote pointing to the main repository and name it `upstream`. To do that, go to the main repo at https://github.com/coi-gov-pl/gui-web-pomogamukrainie-forum and copy the repo URL again under the `<>` button. Then, run:

```
git remote add upstream PASTE_REPO_URL_HERE
```

Then, fetch the latest state of all remotes:

```
git fetch --all --tags -p
```

Now, we want the `develop` and `main` branches locally to point to `upstream` versions and all the rest to your `origin` fork. To do that, fire the following:

```
git checkout -b main upstream/main
git checkout develop
git branch develop -u upstream/develop
```

You're all set!

Note: since your local `develop` will pull from `upstream`, not your fork, the fork will display an old version of `develop` when you open it in the browser. This doesn't matter, though, as we're not using this version of `develop`.

### Working with the fork

When working on any change, always create a new branch first. When you commit to it and you try to `git push` it, Git displays a helpful hint; let's say the branch is named `add-feature-x`:

```
fatal: The current branch add-feature-x has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin add-feature-x

```

Then, you just need to invoke the command it printed to you, and you'll push the branch to your fork and start tracking it. After doing this, a regular `git push` will be enough on this branch. The output after this initial push is also helpful:

```
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'add-feature-x' on GitHub by visiting:
remote:      https://github.com/YOUR_GITHUB_NICK/gui-web-pomogamukrainie-forum/pull/new/add-feature-x
remote:
To github.com:YOUR_GITHUB_NICK/gui-web-pomogamukrainie-forum.git
 * [new branch]      add-feature-x -> add-feature-x
branch 'add-feature-x' set up to track 'origin/add-feature-x'.
```

Opening the suggested URL will lead you to the UI to submit a PR from this branch.

To update your PR, just push to your branch again.
