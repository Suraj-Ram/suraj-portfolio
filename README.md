# [surajramchandran.com](https://suraj-portfolio.vercel.app/)

My portfolio built with Next.js, MDX and TailwindCSS to showcase my experience, projects and interests.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Content management**: [MDX](https://mdxjs.com/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

The way I manage written content for this site is quite unique. I wanted an easy way to separate the writing from the intricacies of my React components. I finally settled on using MDX to write my content in markdown and keep it separate from the React components. This way, I have the simplicity of not using a CMS or a database and have the ease of integration to actually use it in my site.

At compile time, the MDX content is converted to rich text, passed as a prop to the respective server components (h1, h2, a, p, ...) and the site is built using Next and its static site generation.

More structured forms of content (like the list of projects) have content stored in a more conventional TS object. See `projects-content.ts`.

![image](/diagram.png)

### Credits

I was inspired by a variety of sources in building this and want to credit the following projects.

- https://github.com/leerob/leerob.io
- https://github.com/manuarora700/manuarora.in
- https://github.com/alexpate/www
