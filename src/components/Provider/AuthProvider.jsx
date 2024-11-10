import PropTypes from "prop-types"
import { AuthContext } from "../Context/Context"


export default function AuthProvider({ children }) {

    const authInfo = {
        name: "Abir vai"
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}