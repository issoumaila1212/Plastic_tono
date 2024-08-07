import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../route/LoginForm/LoginForm";
import Dashboard from "../route/Dashboard/Dashboard";

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
                path:"utilisateurs",
                element:<div>Users</div>
            },
            {
                path:"kiosque",
                element:<div>Kiosque</div>
            },

        ]
    }
   ]
)

export default router;