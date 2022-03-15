import TestContainer from "../../containers/testContainer/testContainer";

export interface routeType {
    path: string,
    component: JSX.Element,
    children?: routeType[],
}

export const routes: routeType[] = [
    {
        path: '/',
        component: <TestContainer/>,
    }
]
