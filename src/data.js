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
            name: 'Reddit-like Website',
            link: 'http://riddet.xiaoxihome.com/',
            linkText: 'riddet.xiaoxihome.com',
            features: [
                'A content sharing website, built with MongoDB, Express, React, and Node.js',
                'Register, login, password updating functions, cookie is used for session tracking',
                'Users are able to vote, comment, share, save, hide and report posts, and to manage history operations in setting page',
                'Nested comments structure for easy reading and replying',
                'A lightweight Markdown editor and parser',
                'Several feeds layouts and sort algorithm, user preferences are saved to localStorage'
            ]
        },
        1: {
            name: 'RaycasterJS',
            link: 'http://raycaster.xiaoxihome.com/',
            linkText: 'raycaster.xiaoxihome.com',
            features: [
                'A first person shooter multiplayer online game in browser',
                'Powered by a raycaster algorithm written from scratch',
                'Built in components, bundled with Webpack',
                'Uses Websocket for server communications',
                'Performance optimized, targeting stable 60 fps on mid-range laptops',
            ]
        },
        2: {
            name: 'Xiaoxihome',
            link: 'https://www.xiaoxihome.com/',
            linkText: 'xiaoxihome.com',
            features: [
                'MERN stack',
                'Modules have no external dependencies: one-page-scroll about page, and photo gallery',
                'All images are lazyloaded',
                'Data are striped away from view, and stored in JSON format',
                'Responsive web design',
            ]
        }
    },
    education: {
        0: {
            name: 'CFA, Chartered Financial Analyst Level I Exam passed',
            year: '2018',
            isFinTech: '1'
        },
        1: {
            name: 'FRM, Financial Risk Manager Level I Exam passed',
            year: '2018',
            isFinTech: '1'
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
                'Assisted course instructor to prepare exam papers, corrected errors in previous years\' template',
                'Invigilated examinations and graded exams'
            ]
        }
    },
    toolbox: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'SQL', 'Webpack', 'Python', 'Stata', 'LaTeX', 'Adobe Creative Suite']
};

export { data };