const pages =[

    //Public pages
    {
      exact : true ,
      path : '/login' ,
      component : LoginPage ,
      layout : PublicLayout

    } ,
    //Authenticated pages 
    {
        exact : false ,
        path : '/dashboard' ,
        component : DashboardPage ,
        layout : AuthLayout
    }
];
