import loadHeader from "./ui/header";
import loadProjectsList from "./ui/projects";
import loadDefaultProject from "./ui/default";

function loadUI() {
    loadHeader();
    loadProjectsList();
    loadDefaultProject();
}

loadUI();