import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/blog', (c) => {
  return c.text('Hello Hono!')
})

export default app


// postgres://avnadmin:AVNS_rq-fuGadP0Gx-ETwGUb@pg-15d3bd8d-amal-test.k.aivencloud.com:21081/defaultdb?sslmode=require
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYTQwZjFhZDQtZTI3Ni00ZTU4LTlhOWQtNjBiNjRkMWQyN2NkIiwidGVuYW50X2lkIjoiMGUyMTE2MTcwNmIwMTk0NWE3MTJhMjQ0ZjdjNzQxNGMxOTNkZDk4OTc3N2NmMzhhZTIwMmJjM2ZmZDJkYjZhOCIsImludGVybmFsX3NlY3JldCI6IjYyNjk2Nzc0LWFiMDYtNDU0OC1hNjFiLTc2NmQ1ZTM0YmRhYiJ9.sUvsa-VZE1RA_jWzZwQIPItf_RSg05Zr_uiqBoYNb6E"