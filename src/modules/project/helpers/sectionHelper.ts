export const sectionOptions = new Map<
  string,
  { label: string; icon: string; color: string; contentIcon: string }
>([
  [
    'features',
    { label: 'Features', icon: 'mdi-star', color: 'primary', contentIcon: 'mdi-book-open-variant' }
  ],
  [
    'technicalChoices',
    {
      label: 'Technical Choices',
      icon: 'mdi-cogs',
      color: 'secondary',
      contentIcon: 'mdi-application-brackets-outline'
    }
  ]
])
