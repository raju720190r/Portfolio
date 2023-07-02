import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("https://akash7766.github.io/json_api/Projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);
    return [projects];
};

export default useProjects;