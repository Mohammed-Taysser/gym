# [Golds GYM][vercel-live]

Golds GYM is a premier fitness website that offers a comprehensive platform for fitness enthusiasts and individuals seeking to improve their health. The site provides a wide range of resources, including workout plans, nutrition advice, and personal training services. Golds GYM is renowned for its high-quality content, expert trainers, and a supportive community that motivates members to reach their fitness goals. The website also features an online store with fitness equipment and apparel. With its user-friendly interface, Golds GYM makes fitness accessible to everyone, regardless of their fitness level or experience.

Live demo links:

- [![vercel](https://img.shields.io/badge/-vercel-05122A?style=plastic&logo=vercel)][vercel-live]

[vercel-live]: https://gym-fitness-react.vercel.app/

## Features 🎮

- Modern and responsive layout
- Fully responsive with Modern Design
- Use Redux with redux-toolkit Store
- Designed with progressive enhancement in mind.
- Written in TypeScript with predictable static types.
- Use minimal need for any custom CSS.
- Lint using Eslint
- Improve SEO for each page

## Pages 📃

| Page                  | Path                     | Component                                                       |
| --------------------- | ------------------------ | --------------------------------------------------------------- |
| Homepage              | `/`                      | [404](src/pages/public/Homepage.tsx)                            |
| 404                   | `*`                      | [404](src/pages/public/404.tsx)                                 |
| Body Parts            | `/body-parts`            | [BodyPartDetails](src/pages/public/BodyParts.tsx)               |
| Body Part Details     | `/body-parts/:title`     | [BodyPartDetails](src/pages/public/BodyPartDetails.tsx)         |
| Equipments            | `/equipments`            | [Equipments](src/pages/public/Equipments.tsx)                   |
| Equipments Details    | `/equipments/:title`     | [EquipmentDetails](src/pages/public/EquipmentDetails.tsx)       |
| Exercises             | `/exercises`             | [Exercises](src/pages/public/Exercisesl.tsx)                    |
| Exercise Details      | `/exercises/:id`         | [ExerciseDetail](src/pages/public/ExerciseDetail.tsx)           |
| Target Muscles        | `/target-muscles`        | [TargetMuscles](src/pages/public/TargetMuscles.tsx)             |
| Target Muscle Details | `/target-muscles/:title` | [TargetMuscleDetails](src/pages/public/TargetMuscleDetails.tsx) |

## Quick start 🚀

Download the files from [`releases`](https://github.com/Mohammed-Taysser/gym/releases) or clone it using **git** version control:

```shell
git clone https://github.com/Mohammed-Taysser/gym.git
```

Inside the 'circle' directory, install the dependencies by running the following command:

```shell
npm install
```

Start the development server by running the following command:

```shell
npm run dev
```

## Resources ☁️

- [Youtube Video](https://www.youtube.com/watch?v=KBpoBc98BwM)
- [Exercises API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)

## Contribution 🖐️

- Fork it!
- Create your feature branch: git checkout -b feature-name
- Commit your changes: git commit -am 'Some commit message'
- Push to the branch: git push origin feature-name
- Submit a pull request 😉

## License 📜

MIT © [Mohammed Taysser](https://github.com/mohammed-Taysser/)
