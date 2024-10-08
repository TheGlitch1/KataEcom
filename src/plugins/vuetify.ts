import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn, VTextField } from 'vuetify/components'
// @ts-ignore
import colors from 'vuetify/lib/util/colors'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  components: {
    ...components
  },
  aliases: {
    VTextFieldSearch: VTextField,
    VbtnCart: VBtn
  },
  defaults: {
    VDataTable: {
      hover: true,
      headerProps: {
        class: 'font-weight-black text-grey-darken-3'
      },
      ':loading': '&& primary',
      loadingText: 'Chargement des données en cours.',
      noDataText: 'Aucune donnée disponible.',
      itemsPerPageText: 'Éléments par page :'
    },
    VSelect: {
      color: 'primary'
    },
    VTextField: {
      color: 'primary'
    },
    VCard: {
      VToolbar: {
        color: 'firstLevelToolbar',
        density: 'compact'
      }
    },
    VTextFieldSearch: {
      variant: 'outlined',
      color: 'search',
      density: 'comfortable',
      label: 'Rechercher',
      prependInnerIcon: 'mdi-magnify',
      clearable: true,
      singleLine: true
    },
    VbtnCart: {
      class: 'text-none text-subtitle-1',
      color: 'primary',
      size: 'small',
      variant: 'flat'
    }
  },
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          screen: colors.grey.lighten2,
          screen2: colors.shades.white,
          primary: colors.blue.darken1,
          primary2: colors.blue.lighten1,
          menu: colors.teal.darken4,
          success: colors.green.base,
          avatar: colors.blueGrey.lighten4,
          secondary: colors.teal.lighten2,
          plink: colors.blue.accent2,
          accent: colors.teal.lighten1,
          disabled: colors.grey.lighten2,
          add: colors.green.base,
          edit: colors.lightBlue.darken2,
          search: colors.blue.lighten1,
          delete: colors.red.darken2,
          cancel: colors.grey.darken3,
          save: colors.lightGreen.darken2,
          confirm: colors.red.darken1,
          yellow: colors.yellow.darken1,
          card: colors.blueGrey.lighten5,
          activePortTile: colors.green.lighten5,
          disabledPortTile: colors.red.lighten4,
          unusedPortTile: colors.grey.lighten3,
          unusedChipLabelPosition: colors.grey.base,
          searchToolbar: colors.blue.lighten3,
          firstLevelToolbar: colors.blue.darken4,
          cardTitle: colors.blue.darken2,
          divider: colors.grey.darken4,
          secondLevelToolbar: colors.teal.darken1,
          thirdLevelToolbar: colors.teal.lighten3,
          vlistSelected: colors.green.darken4
        }
      },
      dark: {
        dark: true,
        colors: {
          screen: colors.grey.darken1,
          screen2: colors.shades.black,
          primary: colors.blue.lighten1,
          primary2: colors.blue.accent3,
          menu: colors.teal.lighten3,
          success: colors.green.base,
          avatar: colors.blueGrey.darken4,
          secondary: colors.teal.lighten2,
          plink: colors.blue.accent1,
          accent: colors.teal.lighten2,
          disabled: colors.grey.darken3,
          add: colors.green.darken2,
          edit: colors.blue.darken2,
          search: colors.blue.darken3,
          delete: colors.red.darken2,
          cancel: colors.grey.lighten2,
          save: colors.lightGreen.darken2,
          confirm: colors.red.darken1,
          yellow: colors.yellow.darken3,
          card: colors.blueGrey.darken3,
          activePortTile: colors.green.darken4,
          disabledPortTile: colors.red.lighten2,
          unusedPortTile: colors.grey.darken2,
          unusedChipLabelPosition: colors.grey.darken3,
          searchToolbar: colors.blue.darken3,
          firstLevelToolbar: colors.blue.lighten3,
          cardTitle: colors.blue.lighten1,
          divider: colors.grey.lighten2,
          secondLevelToolbar: colors.teal.lighten2,
          thirdLevelToolbar: colors.teal.darken2,
          vlistSelected: colors.lightGreen.darken1
        }
      }
    }
  }
})
