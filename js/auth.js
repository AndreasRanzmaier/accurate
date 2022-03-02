let auth0 = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const authClient = async () => {
    if (!auth0) {
        await configureClient();
    }
    return auth0;
}

const user = async () => {
    const auth = await authClient();
    if (!(await auth.isAuthenticated())) {
        await auth.getTokenSilently();
    }
    const user = auth.getUser();
    if (!user) {
        throw new Error('Unauthenticated');
    }
    return user;
}

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();

    auth0 = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId
    });
};

const login = async () => {
    await auth0.loginWithRedirect({
        redirect_uri: window.location.href
    });
};

const logout = () => {
    auth0.logout({
        returnTo: window.location.href
    });
};

window.onload = async () => {
    await configureClient();
}