function showInfo(username = 'Default User', role = 'Default Role', theme = 'Default Theme'){

    // If username equal undefined set Default User else username
    /* username = username === undefined ? 'Default User' : username;
    role = role === undefined ? 'Default Role' : role;
    theme = theme === undefined ? 'Default Theme' : theme; */

    /* username = username || 'Default User';
    role = role || 'Default Role';
    theme = theme || 'Default Theme'; */



    return `Hello ${username}, Your Role Is: ${role}, Website Theme Is: ${theme}`;

}

/* console.log(showInfo());
console.log(showInfo('SEC'));
console.log(showInfo('SEC', 'Admin'));
console.log(showInfo('SEC', 'Admin', 'White')); */