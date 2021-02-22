interface SwitchRoutes {
    root: string;
    home: string;
    camera: string;
    homeAccepted: string;
    homeRejected: string;
  }
  
  export const switchRoutes: SwitchRoutes = {
    root: '/',
    home: '/home',
    camera: '/camera',
    homeAccepted: '/home_accepted',
    homeRejected: '/home_rejected'
  };

  export const routes: SwitchRoutes = {
    ...switchRoutes,
  };