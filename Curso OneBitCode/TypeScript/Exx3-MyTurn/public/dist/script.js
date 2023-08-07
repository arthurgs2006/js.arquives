const users = []; //array of all users saved
const saveUser = async (username) => {
    const userStatus = await fetch(`https://api.github.com/users/${username}`);
    const user = await userStatus.json();
    if (user.message) {
        console.log("The user does not exist in the GitHub ecosystem.");
    }
    else {
        console.log(`The user ${username} was successfully added to the Aplication ecosystem.`);
        let message = `\nName: ${user.login}\nId: ${user.id}\nBio: ${user.bio}\nPublic Repositories: ${user.public_repos}`;
        users.push(user);
        console.log(message);
        getUser(username);
    }
};
const getUser = async (username) => {
    const findUser = users.find(u => u.login === username);
    if (!findUser) {
        console.log(`The user ${username} was not found in the Aplication ecosystem.`);
        return false;
    }
    const repoStatus = await fetch(findUser.repos_url);
    const repositories = await repoStatus.json();
    let message = `User: ${findUser.name}`;
    repositories.forEach(repo => {
        message += `\nName: ${repo.name}\nDescription: ${repo.description}\nFork: ${repo.fork ? "true" : "false"}\nStars Count: ${repo.stargazers_count}`;
    });
    console.log(message);
};
const showUsers = () => {
    users.forEach(user => {
        let message = `User: ${user.login}\nID: ${user.id}`;
        console.log(message);
    });
};
const repositoryCount = () => {
    const repo = users.reduce((acc, user) => acc + user.public_repos, 0);
    console.log(`The total number of repositories is ${repo}.`);
};
const rakingRepositories = () => {
    const repo = users.slice().sort((a, b) => a.public_repos - b.public_repos).reverse();
    let message = "The raking repositories is:";
    repo.forEach((a, index) => {
        message += `\n${index + 1} - User: ${a.login}\nPublic Repositories: ${a.public_repos}`;
    });
    console.log(message);
};
