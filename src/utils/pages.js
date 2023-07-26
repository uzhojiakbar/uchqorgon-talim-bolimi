import InformationPage from "../Components/InformationPage"
import Home from "../Pages/Home"

export const pagesLink = [
    { id: 1, name: 'Home', path: '/', element: <Home />, child: [], public: true },
    {id: 2, name: 'InformationPage', path: '/InformationPage', element: <InformationPage/>}
]