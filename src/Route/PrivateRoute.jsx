import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../components/Context/Context";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' />;
}

// Prop validation
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
