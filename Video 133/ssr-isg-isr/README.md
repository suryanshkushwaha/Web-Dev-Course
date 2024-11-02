## SSR - Server Side Rendering
this is the default behaviour

## SSG - Static Site Generation
any content which does not have network calls can be generated at build time, and is a static page by default

## ISG or ISR - Incremental Static Generation
this is a hybrid approach, where the page is generated at build time, but can be revalidated at a set interval, and updated if necessary
fetch in next.js caches the response To opt out use:
```
export const dynamic = 'force-dynamic';
```
However, there are exceptions, fetch requests are not cached when:

Used inside a Server Action.
Used inside a Route Handler that uses the POST method.