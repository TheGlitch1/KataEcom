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

### Installation

To get the project running locally, follow these steps:

- Clone the repository
- Install dependencies

 ```sh
 npm install
 ```

- Run the development server

```
  npm run serve
```

## Project Structure

The project follows a modular structure where each feature or functionality is organized into its module. This helps in maintaining a clean and scalable codebase.

```
└── 📁src
    └── 📁assets
        └── base.css
        └── logo.svg
        └── main.css
        └── vue-transitions.css
    └── 📁components
        └── 📁__tests__
            └── HelloWorld.spec.ts
        └── 📁_layout
            └── 📁components
                └── MenuList.vue
            └── 📁constants
                └── MenuEntries.ts
            └── NavigationBar.vue
            └── ToggleTheme.vue
        └── 📁icons
            └── IconCommunity.vue
            └── IconDocumentation.vue
            └── IconEcosystem.vue
            └── IconSupport.vue
            └── IconTooling.vue
        └── HelloWorld.vue
        └── TheWelcome.vue
        └── WelcomeItem.vue
    └── 📁core
        └── 📁types
            └── DataTableHeaderType.ts
    └── 📁modules
        └── 📁cart
            └── 📁__tests__
            └── 📁api
            └── 📁components
                └── Cart.vue
                └── CartButton.vue
            └── 📁composables
            └── 📁constants
            └── 📁helpers
            └── 📁stores
                └── cart.ts
            └── 📁types
                └── CartType.ts
        └── 📁product
            └── 📁__test__
                └── ApiProduct.spec.ts
                └── ProductList.spec.ts
            └── 📁api
                └── ApiProduct.ts
            └── 📁components
                └── ProductFilters.vue
                └── ProductList.vue
            └── 📁composables
                └── useFiltersProduct.ts
                └── useProductListData.ts
            └── 📁constants
            └── 📁helpers
                └── filterProductHelper.ts
            └── 📁types
                └── ProductType.ts
        └── 📁project
            └── 📁__tests__
                └── Features.spec.ts
            └── 📁components
                └── Features.vue
                └── Summary.vue
            └── 📁constants
                └── KeyFeatures.ts
                └── links.ts
    └── 📁plugins
        └── vuetify.ts
    └── 📁router
        └── index.ts
    └── 📁services
        └── 📁api
            └── ApiCategory.ts
            └── index.ts
        └── 📁types
            └── CategoryType.ts
    └── 📁stores
        └── counter.ts
    └── 📁tests
        └── 📁mocks
            └── productMocks.ts
        └── setup.ts
    └── 📁views
        └── AboutView.vue
        └── HomeView.vue
    └── App.vue
    └── main.ts
```

## Separation of Concerns

A key objective of any good frontend application is to keep components singular and separated with minimal code.

For this exercise, I could also use an Atomic architecture, but I believe you would like to see something that allows more flexibility and scalability for large-scale projects (modular monolithic architecture :wink: ).

So this achieved by using the followings :

- **composables**: to handle logic and only keeping only the essentials inside the components.
- **Components** : Vue components for the module.
- **Types**: TypeScript type definitions.
- **API**: Service files for API calls.

### Features

- **Product List Display**: Fetches and displays a list of products from the API, with essential details such as title, price, category, description, rating, and an image. Skeleton loaders are used during data fetching for a smooth user experience.
- **Filtering System**: A dynamic and generic filtering system allowing users to filter products by various criteria (e.g., category, price, description), managed through composables to keep the logic separated and reusable.
- **API Management**: A dedicated API service handles all product-related API calls, constructing endpoints dynamically based on the provided filters and handling multiple API calls concurrently using Promise.all.
- **Shopping Cart**: Implemented using Pinia store for state management, with dynamic calculation of total price and quantity for each item. The cart allows adding, removing, and clearing items, with totals recalculated dynamically based on user actions. A clear cart functionality deletes all items, and a cart icon in the navigation shows a reactive badge with the number of products added.
- **Navigation Menu**: Uses a modular structure to separate the MenuEntries for easy maintenance, with routes declaring components for navigation and a separated component building the menu dynamically from the MenuEntries.
- **Theme Switcher**: Allows users to toggle between dark and light modes, adapting the application's color scheme based on the selected theme for a consistent user experience.
- **Vuetify Integration**: Ensures consistent design and UI components with custom theme configuration and virtual components for theme consistency.
- **Alias Configuration**: Configures Vite/Webpack aliases to simplify imports and improve code readability, using aliases like @product, @cart, @/, and others to import modules and components easily.
- **TypeScript Usage**: Ensures type safety and better code maintainability, with custom types defined for products and other entities for consistent data handling.
- **Composable Functions**: Encapsulates logic for fetching and filtering products in composable functions, keeping components clean and focusing on rendering logic rather than data handling.

### Conclusion

This project exemplifies a scalable and maintainable approach to building complex frontend applications using Vue 3, Vuetify, and TypeScript. With a modular architecture, dynamic filtering system, and reusable composables, it demonstrates best practices in developing robust and flexible applications. These design choices highlight problem-solving skills and a commitment to optimal development practices, providing a strong foundation for any large-scale frontend application.
