import { auth } from "./_lib/auth";

export default async function Home() {
  const session = await auth(); //will MAKE THE PAGE DYNAMICALLY RENDERED! -> because it takes info from cookies and stuff.
  console.log(session);
  return <h1>This is the home route.</h1>;
}

/* 
SESSION DATA!
{
  user: {
    name: 'Paul Santos',
    email: 'paul.santos2107@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocK3kXgp-VvDOH2oL__gd37HZkniC5YRAfJ17_fF6CIApWyV=s96-c'
  },
  expires: '2024-07-03T03:47:19.898Z'
}

in images (if youre going to use an image, 
  referrerPolicy = 'no-referrer'
)
*/
