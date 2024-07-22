export interface MenuType {
  href?: string
  title: string
  icon?: string
  subMenus?: SubMenuType[]
}

interface SubMenuType {
  href: string
  title: string
  icon: string
}

const menuHome: MenuType = {
  href: '/',
  title: 'Accueil'
}

const menuAbout: MenuType = {
  href: '/about',
  title: 'À propos'
}

const menuSupervisions: MenuType = {
  href: '/produits',
  title: 'Liste des produits'
}

export const menuEntries: MenuType[] = [menuHome , menuSupervisions]
