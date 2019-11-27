const data = {
    contact: {
        0: {
            name: 'contact',
            text: 'xiaoxihome.com',
            link: 'https://www.xiaoxihome.com/'
        },
        1: {
            name: 'github',
            text: 'github.com/CptDoraemon',
            link: 'https://github.com/CptDoraemon'
        },
        2: {
            name: 'email',
            text: 'yxx0827@gmail.com',
            link: 'mailto:yxx0827@gmail.com'
        },
        3: {
            name: 'phone',
            text: '647-285-0696',
            link: 'tel:+16472850696'
        }
    },
    projects: {
        0: {
            description: 'Following are my personal projects.'
        },
        1: {
            name: 'Reddit-like Website',
            link: 'https://riddet.xiaoxihome.com/',
            linkText: 'riddet.xiaoxihome.com',
            features: [
                'A discussion website, built with MongoDB, Express, React, and Node.js',
                'Users are able to create and manage account',
                'Users are able to create and interact with posts such as voting and commenting',
                'Several feeds layouts and sorting algorithms'
            ]
        },
        2: {
            name: 'RaycasterJS',
            link: 'https://raycaster.xiaoxihome.com/',
            linkText: 'raycaster.xiaoxihome.com',
            features: [
                'A first person shooter multi-player game in browser',
                'Powered by a raycaster algorithm for pseudo 3D rendering',
                'Built in modules, bundled with Webpack',
                'WebSocket used for server communications',
                'Performance optimized, targeting stable 60 fps',
            ]
        },
        4: {
            name: 'Weather App',
            link: 'https://cptdoraemon.github.io/weather',
            linkText: 'cptdoraemon.github.io/weather',
            features: [
                'A weather app, web version built with React, mobile version built with Flutter',
                'Third party API used for weather and location data',
                'Data visualized to interactive charts'
            ]
        },
        5: {
            name: 'Xiaoxihome',
            link: 'https://www.xiaoxihome.com/',
            linkText: 'xiaoxihome.com',
            features: [
                'My portfolios website, built with MERN stack',
                'Rich in animations, included a one-page-scroll introduction page and a gallery',
                'Data are striped away from the view, and stored in JSON format for easy updating'
            ]
        }
    },
    education: {
        0: {
            name: 'CFA, Chartered Financial Analyst Level I Exam passed',
            year: '2018',
            isFinTech: true
        },
        1: {
            name: 'FRM, Financial Risk Manager Level I Exam passed',
            year: '2018',
            isFinTech: true
        },
        2: {
            name: 'M.A. Economics',
            name1: 'York University',
            year: '2016-2017',
            features: [
                'York University Graduate Scholarship',
                'York University Graduate Fellowship'
            ]
        },
        3: {
            name: 'B.A. Financial & Business Economics',
            name1: 'York University',
            year: '2013-2015',
            features: [
                'Member of Dean\'s Honour Roll',
                'GPA: 3.5/4.0'
            ]
        }
    },
    workExperience: {
        0: {
            name: 'Teaching Assistant',
            name1: 'York University',
            year: '2016-2017',
            features: [
                'Held office hours to provide academic support to students',
                'Assisted course instructor to prepare exam papers, corrected errors in previous years\' templates',
                'Invigilated examinations and graded exams'
            ]
        }
    },
    toolbox: [
            ['JavaScript', 'React', 'Node.js', 'Webpack'],
            ['Dart', 'Flutter'],
            ['SQL', 'MongoDB'],
            ['Python', 'Stata', 'LaTeX', 'Photoshop']
        ]
};

export { data };