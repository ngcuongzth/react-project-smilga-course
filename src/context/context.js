import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {

    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    
    const [showError, setShowError] = useState(false)
    // request loading 
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);

    // error 
    const [error, setError] = useState({
        show: false,
        msg: ''
    });

    // searcGithubUser
    const searchGithubUser = async (user) => {
        toggleError();
        setLoading(true);
        try {
            const response = await fetch(`${rootUrl}/users/${user}`)
            const data = await response.json();
            if (response) {
                setGithubUser(data);
                const { login, followers_url } = data;

                // repos 
                const responseRepos = await fetch(`${rootUrl}/users/${login}/repos?per_page=100`);
                const dataRepos = await responseRepos.json();
                setRepos(dataRepos);

                // followers 
                const responseFollowers = await fetch(`${followers_url}?per_page=100`)
                const dataFollowers = await responseFollowers.json();
                setFollowers(dataFollowers);
            }
            checkRequests();
            setLoading(false);
            setShowError(false)

            console.log(response);
            // console.log(data);

        }
        catch (e) {
            toggleError(true, 'there is no user with that username');
            setLoading(false);
            setShowError(true)
        }
    }



    const checkRequests = async () => {
        const response = await fetch(`${rootUrl}/rate_limit`);
        const data = await response.json();
        try {
            const { rate: { remaining, limit } } = data;
            setRequests(remaining);
            if (remaining === 0) {
                // throw an error 
                toggleError(true, 'sorry, you have exeeded your hourly rate limit');
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    // error 
    const toggleError = (show = false, msg = '') => {
        setError({ show, msg })
    }

    useEffect(() => {
        checkRequests();
    }, [])


    return (
        <GithubContext.Provider value={{
            githubUser,
            repos,
            followers,
            requests,
            error,
            searchGithubUser,
            loading, setLoading,
            showError
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubContext, GithubProvider };

