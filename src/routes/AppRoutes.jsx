import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../layouts/DashboardLayout";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                {/* <Route path="/habits" element={<Habits />} />
                <Route path="/today" element={<Today />} /> */}

            </Routes>
        </BrowserRouter>
    )
};