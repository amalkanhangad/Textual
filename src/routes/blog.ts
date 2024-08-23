import {Hono} from "hono"
export const blogRouter = new Hono<{
Bindings:{
    DATABASE_URL: string;
    JWT_URL: string;
}
}>;

blogRouter.use("/*")
blogRouter.post('/', (c) => {
    return c.text('Hello Hono!')
  })

blogRouter.put('/', (c) => {
  return c.text('Hello Hono!')
})

blogRouter.get('/', (c) => {
  return c.text('Hello Hono!')
})

blogRouter.get('/bulk', (c) => {
  return c.text('Hello Hono!')
})