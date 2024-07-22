# 🛍️ E-commerce Product Gallery Frontend

This project is a high-quality, robust, well-documented, dynamic, and interactive e-commerce web application built using Vue 3 and Vuetify 3. It showcases a professional design system with a modular structure to keep components singular and maintainable.

## Overview

### Technologies Used

- **Vue 3**: The progressive JavaScript framework.
- **Vuetify 3**: A Vue UI Library with beautifully handcrafted Material Components.
- **Custom theme**: I Made a custom theme in order to keep a good color palette.
- **virtual Component**: This is a Vuetify feature where you config/adjust certain components to avoid re-defining them later on.
- **TypeScript**: For type safety and better developer experience.
- **ViteAliases**: Config shortcuts, makes it easy to import things from anywhere :wink: .

### Technical Benefits

- Modular architecture for maintainability and scalability.
- Use of Vuetify 3 for a consistent design system.
- Composables for logic separation and code reuse.
- TypeScript for type safety.

## Project Structure

The project follows a modular structure where each feature or functionality is organized into its module. This helps in maintaining a clean and scalable codebase.

```
src/
|-- assets/
|-- components/
|   |-- __tests__/
|   |-- _layout/
|       |-- components/
|           |-- NavigationBar.vue
|           |-- ToggleTheme.vue
|       |-- composables/
|       |-- constants/
|           |-- MenuEntries.vue
|   |-- icons/
|       |-- HelloWorld.vue
|       |-- TheWelcome.vue
|       |-- WelcomeItem.vue
|-- core/
|   |-- types/
|       |-- DataTableHeaderType.ts
|-- modules/
|   |-- cart/
|       |-- api/
|       |-- components/
|           |-- XYcomponent.vue
|       |-- composables/
|       |-- constants/
|       |-- helpers/
|       |-- types/
|   |-- product/
|       |-- api/
|           |-- ApiProduct.ts
|       |-- components/
|           |-- ProductList.vue
|       |-- composables/
|           |-- useProductListData.vue
|       |-- constants/
|       |-- helpers/
|       |-- types/
|           |-- ProductType.vue
|-- plugins/
|   |-- vuetify.ts
|-- router/
|   |-- index.ts
|-- services/
|-- stores/
|-- views/
|   |-- App.vue
|-- main.ts
|-- .env
|-- .eslintrc.cjs
|-- .gitignore
|-- .prettierrc.json
```

## Separation of Concerns

A key objective of any good frontend application is to keep components singular and separated with minimal code.

For this exercise, I could also use an Atomic architecture, but I believe you would like to see something that allows more flexibility and scalability for large-scale projects (modular monolithic architecture :wink: ).

So this achieved by using the followings :

- **composables**: to handle logic and only keeping only the essentials inside the components.
- **Components** : Vue components for the module.
- **Types**: TypeScript type definitions.
- **API**: Service files for API calls.
