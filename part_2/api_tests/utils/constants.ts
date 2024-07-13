export const user_3 = {
    "data": {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

export const usernames: string[] = [
    'John', 'Dave', 'Aaron', 'Mickey', 'Emma', 'Andrew', 'Peter', 'Sophia', 'Olivia', 'Liam', 
    'Noah', 'James', 'Isabella', 'Mason', 'Ava', 'Logan', 'Lucas', 'Mia', 'Ethan', 'Amelia', 
    'Alexander', 'Charlotte', 'Henry', 'Harper', 'Sebastian', 'Evelyn', 'Benjamin', 'Abigail', 
    'Elijah', 'Ella', 'Jack', 'Scarlett', 'Daniel', 'Grace', 'Matthew', 'Chloe', 'Michael', 'Victoria', 
    'Samuel', 'Lily'
];

export const jobs: string[] = [
    "Software Developer", "Data Scientist", "Graphic Designer", "Project Manager", "Marketing Specialist",
    "Sales Representative", "Financial Analyst", "Human Resources Manager", "Content Writer", "Web Developer",
    "Product Manager", "Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Architect", "Nurse",
    "Doctor", "Pharmacist", "Teacher", "Professor", "Research Scientist", "Biologist", "Chemist", "Physicist",
    "Journalist", "Photographer", "Chef", "Event Planner", "Lawyer", "Accountant"
];

export const username = usernames[Math.floor(Math.random() * usernames.length)];
export const job = jobs[Math.floor(Math.random() * jobs.length)];

export const getUnknownUserResponse = {
    "data": {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
};

export const dataForSuccessfulLogin = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
};

export const dataForUnsuccessfulLogin = {
    "email": "abcdsee@yahoo.com",
    "password": "wrongpasss"
};

export const userDataForPatchRequest = {
    name: 'alex',
    job: 'qa'
};

export const expectedPatchRespose = {
    name: 'alex',
    job: 'qa'
};

export const userDataForPostRequest = {
    email: 'authemail@yahoo.com',
    password: 'pass213'
  };

export const expectedPostRespose = {
    name: 'alex',
    job: 'qa'
};