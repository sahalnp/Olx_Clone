import bcrypt from "bcryptjs";

export const handleSignup = async ({ e, email, name, password }) => {``
    e.preventDefault();

    const existingEmail = localStorage.getItem("email");
    if (existingEmail === email) {
        return { success: false, message: "Email already exists" };
    }

    const hashed = await bcrypt.hash(password, 10);

    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("password", hashed);
    localStorage.setItem("isAuth", false);

    return { success: true, message: "Signup successful" };
};

export const handleLogin = async ({email, password }) => {
    const storedEmail = localStorage.getItem("email");
    const storedHashedPassword = localStorage.getItem("password");

    if (!storedEmail) {
        return { success: false, message: "No account found. Please signup." };
    }

    if (email !== storedEmail) {
        return { success: false, message: "Incorrect email." };
    }

    const match = await bcrypt.compare(password, storedHashedPassword);
    if (!match) {
        return { success: false, message: "Incorrect password." };
    }

    localStorage.setItem("isAuth", "true");
    return { success: true, message: "Login successful" };
};
export const logOut = () => {
    localStorage.setItem("isAuth", false);
    return { success: true, message: "logut successfully" };
};
