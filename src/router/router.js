import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../route/LoginForm/LoginForm";
import Dashboard from "../route/Dashboard/Dashboard";
import Home from "../route/Home/Home";
import Notiiplein from "../route/Notifiplein/Notiiplein";

import NotificationVide from  "../route/Notifivide/NotificationVide"
import User from "../route/Users/User";
import Kiosque from "../route/Kiosque/Kiosque";
import DetailUser from "../route/DetailUser/DetailUser";
import HistoriqueTransaction from "../route/HistoriqueTransaction/HistoriqueTransaction";
import GestionNotification from "../route/GestionNotification/GestionNotification";


const router=createBrowserRouter(
   [
    {
        path:"/",
        element:<LoginForm/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>,
        children:[
            {
                path: "/dashboard",
                element: <Home />
            },
            {
                path: "notificationplein",
                element: <Notiiplein />
            },
            {
                path:"notificationvide",
                element: <NotificationVide />
            },
            {
            path:"utilisateur",
                element: <User />
            },
            {
                path:"kiosque",
                element: <Kiosque />
            },
            {
                path:"gestionutilisateur",
                element: <DetailUser />
            },
            {
                path:"historiquetransaction",
                element:<HistoriqueTransaction />
            },
            {
                path:"gestionnotification",
                element:<GestionNotification />
            }


        ]
    }
   ]
)

export default router;