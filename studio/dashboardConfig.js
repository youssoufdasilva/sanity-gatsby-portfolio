export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5c4b3b281b8fb22f28c9a6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zcnw5j1r',
                  apiId: 'e678b798-7075-44b6-8121-800069bdbe40'
                },
                {
                  buildHookId: '5e5c4b3be250ff4ee57ca92b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-d8zqn6os',
                  apiId: '72a3cbc1-f793-4f7c-a94a-41fb48037bc1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/youssoufdasilva/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-d8zqn6os.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
