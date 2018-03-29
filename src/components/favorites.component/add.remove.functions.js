const user = 'test';

export const addFavotire = (currencyCode) => {
    fetch(`https://project-jedi-72218.firebaseio.com/${user}/favorite/${currencyCode}.json`, {
        method: "POST",
        body: JSON.stringify({currencyCode: currencyCode}),
    });
};

export const removeFavorite = (currencyCode) => {
    fetch(`https://project-jedi-72218.firebaseio.com/${user}/favorite/${currencyCode}.json`, {
        method: 'delete'
    });
};
