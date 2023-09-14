# Hey reviewer! This is the  Live demo

## Tech stack - [live demo here](https://merry-longma-67e989.netlify.app/)

### Why Vue3?

I chose Vue.js to build this project due to its feature set and built-in state management capabilities. The choice of framework ultimately depends on the project's requirements, and both have their strengths. They all have their own pros and cons. It's like you ask someone, "Apple or Orange?":D They are both good!

## Why Vuetify for Styling?

[Vuetify](https://vuetifyjs.com/) is a popular Vue.js UI framework that provides a set of pre-designed components and a cohesive design system. I chose to use Vuetify for several reasons:

- **Rapid Prototyping**: Vuetify offers a wide range of ready-to-use components, which allowed me to quickly prototype and develop the user interface without spending excessive time on custom styling and layout.

- **Consistency**: Vuetify enforces a consistent design language and user experience across the application, ensuring that the UI looks polished and professional.

- **Responsive Design**: Vuetify is built with responsiveness in mind, making it easier to create a mobile-friendly and adaptable user interface. This aligns with the requirement to have a responsive and mobile-friendly application.

- **Community and Documentation**: Vuetify has a vibrant community and extensive documentation, which made it easier for me to find solutions to common UI challenges and troubleshoot issues.

- **Customization**: While Vuetify provides a set of predefined components, it also allows for extensive customization. I was able to tailor the components to match the specific design requirements of the project.

Overall, Vuetify helped streamline the development process, maintain a consistent and visually appealing UI, and leverage the power of Vue.js for building a feature-rich TV shows application.

## Leveraging Vue `ref` and Composable API

In this project, I made extensive use of Vue's `ref` and the Composable API to manage state and enhance the overall development experience. Here's why I chose to use these features:

### Vue `ref`

- **Reactivity**: Vue's `ref` provides reactivity, allowing me to efficiently manage and react to changes in variables and data. This reactivity simplifies state management and ensures that the UI updates automatically when data changes.

- **Direct DOM Interaction**: `ref` enables direct interaction with the DOM when necessary, making it easier to work with elements, forms, and user interactions. This flexibility was particularly useful for creating a dynamic and responsive user interface.

- **Simplicity**: `ref` is straightforward to use, making it an excellent choice for managing simple state variables, such as input values, counters, and flags.

### Composable API

The Composable API is a set of reusable functions and logic that can be shared across different parts of the application. Here's how I benefited from using the Composable API:

- **Modularity**: Composables promote a modular code structure, allowing me to encapsulate and reuse logic for various aspects of the application, such as API requests, data transformations, and state management.

- **Code Reusability**: Composables encourage code reusability, reducing duplication and promoting a cleaner and more maintainable codebase. This made it easier to scale and enhance the application.

- **Separation of Concerns**: By isolating specific functionality into composable functions, I achieved a clearer separation of concerns within the codebase. This separation improved code readability and made it easier to reason about different parts of the application.

- **Testing**: Composables can be easily tested in isolation, enhancing the overall testability of the application and ensuring that individual pieces of functionality work as expected.

Overall, the combination of Vue's `ref` for reactivity and the Composable API for code organization and reusability contributed to a more efficient development process and a well-structured Vue.js TV shows application.



## Testing with Vitest and Cypress

I selected [Vitest](https://github.com/egoist/vitest) and [Cypress](https://www.cypress.io/) as the testing tools for this project due to their respective strengths and capabilities. I am doing 100% e2e testing.

### Vitest

[Vitest](https://github.com/egoist/vitest) is a modern and versatile test runner designed specifically for Vue 3 applications. Here are the reasons why I opted for Vitest:

- **Vue 3 Compatibility**: Vitest is tailored for Vue 3, which aligns perfectly with the Vue 3 ecosystem used in this project. It provides a seamless testing experience for Vue 3 components and features.

- **Lightweight and Fast**: Vitest is lightweight and efficient, allowing for speedy test execution. This is essential for maintaining a quick feedback loop during development.

- **Comprehensive Vue Testing**: Vitest supports various testing aspects, including unit tests, component tests, and end-to-end tests, covering the full spectrum of Vue 3 application testing needs.

- **Integration with Vue Ecosystem**: Vitest integrates seamlessly with Vue's testing utilities, making it easier to write and run tests for Vue components and features.

- **Snapshot Testing**: I used Vitest's snapshot testing feature to capture and verify component snapshots, ensuring that UI changes are intentional and controlled.

### Cypress

[Cypress](https://www.cypress.io/) is an end-to-end testing framework known for its simplicity and powerful testing capabilities. Here's why Cypress was the right choice for this project:

- **Real-Time Testing**: Cypress allows for real-time testing in the browser, providing an interactive testing environment. This is especially valuable for visually inspecting and debugging UI behavior.

- **End-to-End Testing**: Cypress excels in end-to-end testing scenarios, allowing me to simulate user interactions and verify the application's functionality from a user's perspective.

- **Cross-Browser Testing**: Cypress supports cross-browser testing, ensuring that the application functions consistently across different browsers, a crucial aspect of delivering a high-quality web application.

- **Integration with Vue**: Cypress has excellent integration with Vue applications, making it easy to select Vue components, trigger events, and assert the application's behavior.

- **Detailed Test Reports**: Cypress generates detailed test reports and logs, making it straightforward to diagnose issues and failures during testing.

By combining Vitest and Cypress, I was able to cover the full spectrum of testing needs for this Vue.js TV shows application. Vitest handled unit and component testing, while Cypress provided end-to-end testing capabilities, ensuring the reliability and quality of the application.


### framer-motion for animations

# Screenshot of the app

![app-screenshot](./public/home.png?raw=true)
![app-screenshot](./public/result-not-found.png?raw=true)
![app-screenshot](./public/show-detail.png?raw=true)
![app-screenshot](./public/episodes.png?raw=true)
![app-screenshot](./public/page-not-found.png?raw=true)


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Open the application in your browser at http://localhost:5174
