export const keyFeatures: Record<string, { title: string; icon?: string; points: string[] }[]> = {
  features: [
    {
      title: 'Theme Switcher',
      icon: 'mdi-theme-light-dark',
      points: [
        'A theme switcher allows users to toggle between dark and light modes.',
        'The application adapts its color scheme based on the selected theme, providing a consistent user experience.'
      ]
    },
    {
      title: 'Global Notification System',
      icon: 'mdi-bell-alert',
      points: [
        'Implemented a global notification system using composable functions.',
        'The notification system allows triggering alerts from any part of the app.',
        'Supports different notification types: success, warning, error, and info.',
        'Keeps components clean and focuses on user feedback without handling repetitive logic.'
      ]
    },
    {
      title: 'Product List Display',
      icon: 'mdi-view-list',
      points: [
        'Fetches and displays a list of products from the API.',
        "Each product is displayed in a card format using customized Vuetify's card components.",
        'Products include essential details like title, price, category, description, rating, and an image.',
        'Skeleton loaders are used during data fetching for a smooth user experience.'
      ]
    },
    {
      title: 'Filtering System',
      icon: 'mdi-filter-outline',
      points: [
        'A Generic & Dynamic filtering system allowing users to filter products by various criteria (e.g., category, price, description).',
        'Filters are managed through a composable to keep the logic separated and reusable.',
        'Filters are applied both on the frontend and backend, demonstrating problem-solving in handling non-flexible backend APIs.'
      ]
    },
    {
      title: 'API Management',
      icon: 'mdi-api',
      points: [
        'A dedicated API service handles all product-related API calls.',
        'The list method in the API service constructs endpoints dynamically based on the provided filters.',
        'Multiple API calls are handled concurrently using Promise.all to fetch filtered products.( Normally we would have a filter parameter in the API endpoint, but the backend API does not support this feature.)'
      ]
    },
    {
      title: 'Shopping Cart',
      icon: 'mdi-cart-outline',
      points: [
        'Implemented using Pinia store for state management.',
        'Stores cart items in local storage for persistence across sessions.',
        'Dynamic calculation of total price and quantity for each item.',
        'Ability to add, remove, and clear items from the cart.',
        'Cart totals are recalculated dynamically based on user actions.',
        'Clear cart functionality that deletes all items in the cart.',
        'Cart icon in the navigation with a reactive badge showing the number of products added.'
      ]
    },
    {
      title: 'Navigation Menu',
      icon: 'mdi-menu',
      points: [
        'Uses a composable to separate the MenuEntries for easy maintenance.',
        'A separated component builds the menu dynamically from the MenuEntries.',
        'Routes are used to declare components for navigation.'
      ]
    }
  ],
  technicalChoices: [
    {
      title: 'Modular Structure',
      icon: 'mdi-puzzle-outline',
      points: [
        'The project follows a modular architecture, which is ideal for scalable/maintaining applications.',
        'Each module (e.g., product, cart) has its own folder containing components, composables, helpers, types,constants, and APIs.',
        'This structure allows for easy management, testing, and scaling of the application.'
      ]
    },
    {
      title: 'Vuetify Integration',
      icon: `$${'vuetify'}`,
      points: [
        'Vuetify is used for consistent design and UI components.',
        'Custom theme configuration with primary and secondary colors, dark and light mode support.',
        'Virtual components are configured for theme consistency across the application.'
      ]
    },
    {
      title: 'Alias Configuration',
      icon: 'mdi-link-variant',
      points: [
        'Vite/Webpack aliases are configured to simplify imports and improve code readability.',
        'Aliases like @product, @cart, @/, and others are used to import modules and components easily.'
      ]
    },
    {
      title: 'TypeScript Usage',
      icon: 'mdi-language-typescript',
      points: [
        'TypeScript is used for type safety and better code maintainability.',
        'Custom types are defined for products and other entities, ensuring consistent data handling.'
      ]
    },
    {
      title: 'Composable Functions',
      icon: 'mdi-function-variant',
      points: [
        'Logic for fetching and filtering products is encapsulated in composable functions.',
        'This approach keeps components clean and focuses on rendering logic rather than data handling.'
      ]
    },
    {
      title: 'Singleton Pattern for Global State',
      icon: 'mdi-shield-account',
      points: [
        'The notification system is implemented as a Singleton, ensuring that only one instance of the notification state is shared across the application.',
        'It provides centralized control over notification visibility, type, and message, improving maintainability and reducing redundancy.'
      ]
    }
  ]
}
