

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil3d'
  },

  // Networth Tracker
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Networth Tracker']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Networth',
    to: '/theme/colors',
    icon: 'cil-dollar',
  },,
  {
    _tag: 'CSidebarNavItem',
    name: 'Stock Trades',
    to: '/theme/colors',
    icon: 'cil-loop-circular',
  },,
  {
    _tag: 'CSidebarNavItem',
    name: 'Stock Portfolio',
    to: '/networth/portfolio',
    icon: 'cil-bar-chart',
  },

  // Player Information
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Player Statistics']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Xanax Tracker',
    to: '/theme/colors',
    icon: 'cil-graph',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Stats Tracker',
    to: '/theme/colors',
    icon: 'cil-weightlifitng',
  },

  // Utilities
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Utilities']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Target Finder',
    to: '/theme/colors',
    icon: 'cil-user-x',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Gambler Watch',
    to: '/utilities/gamblers',
    icon: 'cil-money',
  }
]

