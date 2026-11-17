import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const ContextExampleApp = () => {
    return (
        <div className="bg-gradient">
            <RouterProvider router={appRouter} />
        </div>
    );
}
