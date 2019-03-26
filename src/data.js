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
            description: 'Followings are my personal projects, highlighted features or modules are built from scratch and have no external dependencies by design'
        },
        1: {
            name: 'Reddit-like Website',
            link: 'http://riddet.xiaoxihome.com/',
            linkText: 'riddet.xiaoxihome.com',
            features: [
                'A content sharing website, built with MongoDB, Express, React, and Node.js',
                'Users are able to register, login, and update passwords, cookie is used for session tracking',
                'Users are able to vote, comment, share, save, hide and report posts, and to manage history operations in centralized setting hub',
                'Nested comments structure for easy reading and replying',
                'A lightweight Markdown editor and parser for text decorations',
                'Several feeds layouts and sort algorithms, user preferences are saved to localStorage'
            ]
        },
        2: {
            name: 'RaycasterJS',
            link: 'http://raycaster.xiaoxihome.com/',
            linkText: 'raycaster.xiaoxihome.com',
            features: [
                'A first person shooter multiplayer online game in browser',
                'Powered by a raycaster algorithm for pseudo 3D rendering',
                'Built in components, bundled with Webpack',
                'Uses WebSocket for server communications',
                'Performance optimized, targeting stable 60 fps on mid-range laptops',
            ]
        },
        3: {
            name: 'Xiaoxihome',
            link: 'https://www.xiaoxihome.com/',
            linkText: 'xiaoxihome.com',
            features: [
                'A portfolios website, built with MERN stack',
                'Includes an one-page-scroll about page',
                'Includes an easy navigation and mobile friendly photo gallery',
                'All images are lazyloaded',
                'Data are striped away from the view, and stored in JSON format'
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