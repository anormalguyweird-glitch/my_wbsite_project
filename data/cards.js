
const username = 'anormalguyweird-glitch';

const githubURL = `https://github.com/${username}`;

const pagesURL = `https://${username}.github.io`;

const cards = [
    {
        title: 'my_wbsite_project',
        description: 'My personal website project showcasing my programming skills, projects and interests.',
        language: 'HTML',
        live: true,
        updated: '2026-11-28'
    },
    {
        title: 'website-project-friends',
        description: 'A website project based around friends and personal connections.',
        language: 'HTML',
        live: true,
        updated: '2026-11-07'
    },
    {
        title: 'my-website',
        description: 'An earlier personal website project experimenting with web development and page layouts.',
        language: 'HTML',
        live: true,
        updated: '2026-09-26'
    },
    {
        title: 'DavidLi---Basis-HackathonProject-1',
        description: 'A web development project created for the BASIS Hackathon.',
        language: 'HTML',
        live: true,
        updated: '2026-09-09'
    },
    {
        title: 'Fractal',
        description: 'A creative coding project exploring mathematical patterns and fractal geometry through JavaScript.',
        language: 'JavaScript',
        live: true,
        updated: '2026-07-31'
    },
    {
        title: 'Bridget-Riley-2',
        description: 'A second creative coding experiment inspired by Bridget Riley and optical art.',
        language: 'JavaScript',
        live: true,
        updated: '2026-07-31'
    },
    {
        title: 'Bridget-Riley',
        description: 'A generative art experiment inspired by Bridget Riley, exploring geometric patterns and optical illusions.',
        language: 'JavaScript',
        live: true,
        updated: '2026-07-31'
    },
    {
        title: 'piet-mondrian',
        description: 'A creative coding project inspired by Piet Mondrian and geometric abstract art.',
        language: 'JavaScript',
        live: true,
        updated: '2026-07-31'
    },
    {
        title: '---',
        description: 'An experimental JavaScript project.',
        language: 'JavaScript',
        live: true,
        updated: '2026-07-31'
    },
    {
        title: 'snow',
        description: 'A JavaScript experiment exploring snowfall and particle animation.',
        language: 'JavaScript',
        live: true,
        updated: '2026-07-31'
    },
    {
        title: 'walker',
        description: 'A creative coding experiment exploring movement and random walker behavior.',
        language: 'JavaScript',
        live: true,
        updated: '2026-07-24'
    }
];

const githubScreenshots = {};

const projectLinks = {};

async function getProjects() {

    return cards.map(card => {

        const repository =
            `${githubURL}/${card.title}`;

        const liveURL = projectLinks[card.title] ||
            (card.live
                ? `${pagesURL}/${card.title}/`
                : null);

        const screenshot = githubScreenshots[card.title] || null;

        const websiteScreenshot = liveURL
            ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(liveURL)}?w=1200&h=800`
            : null;

        return {

            title: card.title,

            description: card.description,

            language: card.language,

            imageURL: screenshot,

            websiteScreenshot: websiteScreenshot,

            url: repository,

            homepage: liveURL,

            projectURL: liveURL || repository,

            stars: 0,

            forks: 0,

            updated: card.updated

        };

    });

}
